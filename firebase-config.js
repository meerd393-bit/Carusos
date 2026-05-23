// =====================================================
// firebase-config.js - Carusos Restaurant
// =====================================================
// ⚠️ ضع هنا بيانات Firebase الخاصة بك
// اذهب إلى: https://console.firebase.google.com
// اختر مشروعك → Project Settings → Your Apps → Firebase SDK snippet
// =====================================================

const firebaseConfig = {
    apiKey: "PASTE_YOUR_API_KEY_HERE",
    authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
    projectId: "PASTE_YOUR_PROJECT_ID_HERE",
    storageBucket: "PASTE_YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "PASTE_YOUR_APP_ID_HERE"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, addDoc, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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
    const q = query(ordersRef, orderBy('date', 'desc'));
    return onSnapshot(q, (snapshot) => {
        const orders = [];
        snapshot.forEach(d => orders.push({ firebaseId: d.id, ...d.data() }));
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
