import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, addDoc, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// =====================================================
// firebase-config.js - Carusos Restaurant
// =====================================================
const firebaseConfig = {
  apiKey: "AIzaSyBHxUJfiOPZtpFdF5wSDkXLmshVyY-VFfQ",
  authDomain: "carusos-restaurant.firebaseapp.com",
  projectId: "carusos-restaurant",
  storageBucket: "carusos-restaurant.firebasestorage.app",
  messagingSenderId: "202624644443",
  appId: "1:202624644443:web:25b93d1294296c99a2d67e",
  measurementId: "G-WDEEHBLT8C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// =====================================================
// Collection References
// =====================================================
const settingsRef = doc(db, 'config', 'settings');
const pricesRef   = doc(db, 'config', 'prices');
const ordersRef   = collection(db, 'orders');

// =====================================================
// Exported helpers
// =====================================================

/** جلب الإعدادات (VAT, delivery, whatsapp, ...) */
async function fetchSettings() {
    try {
        const snap = await getDoc(settingsRef);
        return snap.exists() ? snap.data() : null;
    } catch (e) {
        console.warn('[Firebase] fetchSettings error:', e);
        return null;
    }
}

/** جلب الأسعار المخصصة */
async function fetchPrices() {
    try {
        const snap = await getDoc(pricesRef);
        return snap.exists() ? snap.data() : null;
    } catch (e) {
        console.warn('[Firebase] fetchPrices error:', e);
        return null;
    }
}

/** حفظ الإعدادات من Dashboard */
async function saveSettings(data) {
    await setDoc(settingsRef, data, { merge: true });
}

/** حفظ الأسعار من Dashboard */
async function savePrices(data) {
    await setDoc(pricesRef, data, { merge: true });
}

/** إضافة طلب جديد */
async function addOrder(orderData) {
    return await addDoc(ordersRef, orderData);
}

/** مراقبة الطلبات لحظياً (Real-time) للـ Dashboard */
function onOrdersUpdate(callback) {
    return onSnapshot(ordersRef, (snapshot) => {
        const orders = [];
        snapshot.forEach(d => orders.push({ firebaseId: d.id, ...d.data() }));
        // Sort locally to avoid dropping old orders without date field or missing index errors
        orders.sort((a, b) => {
            const d1 = a.date ? new Date(a.date).getTime() : 0;
            const d2 = b.date ? new Date(b.date).getTime() : 0;
            return d2 - d1;
        });
        callback(orders);
    });
}

/** تحديث حالة طلب */
async function updateOrderStatus(firebaseId, status) {
    const orderDoc = doc(db, 'orders', firebaseId);
    await setDoc(orderDoc, { status }, { merge: true });
}

/** حذف طلب */
async function deleteOrder(firebaseId) {
    const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    await deleteDoc(doc(db, 'orders', firebaseId));
}

export {
    db,
    fetchSettings, fetchPrices,
    saveSettings, savePrices,
    addOrder, onOrdersUpdate, updateOrderStatus, deleteOrder
};
