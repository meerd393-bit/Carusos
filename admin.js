/* admin.js - Handles dashboard interactions and data persistence */

// Fetch current data from server
async function loadData() {
    try {
        const res = await fetch('/api/data');
        const data = await res.json();
        populateForm(data);
    } catch (e) {
        console.error('Failed to load data:', e);
    }
}

// Populate settings and price fields (assumes IDs exist in admin.html)
function populateForm(data) {
    // Settings
    document.getElementById('vatRate').value = data.settings?.vatRate ?? '';
    document.getElementById('deliveryFee').value = data.settings?.deliveryFee ?? '';
    document.getElementById('minOrder').value = data.settings?.minOrder ?? '';
    document.getElementById('waPhone').value = data.settings?.waPhone ?? '';
    document.getElementById('waMsg').value = data.settings?.waMsg ?? '';
    document.getElementById('ordersOpen').value = data.settings?.ordersOpen ?? '';
    // Prices (assumes a container where each price row has data-key attribute)
    const priceContainer = document.getElementById('priceContainer');
    if (priceContainer && data.prices) {
        priceContainer.innerHTML = '';
        Object.entries(data.prices).forEach(([key, price]) => {
            const row = document.createElement('div');
            row.className = 'price-row';
            row.innerHTML = `
                <div class="price-row-name">${key}</div>
                <input type="number" class="price-input" data-key="${key}" value="${price}" />
            `;
            priceContainer.appendChild(row);
        });
    }
}

// Collect data from form and send to server
async function saveData() {
    try {
        const settings = {
            vatRate: document.getElementById('vatRate').value,
            deliveryFee: document.getElementById('deliveryFee').value,
            minOrder: document.getElementById('minOrder').value,
            waPhone: document.getElementById('waPhone').value,
            waMsg: document.getElementById('waMsg').value,
            ordersOpen: document.getElementById('ordersOpen').value
        };
        const prices = {};
        document.querySelectorAll('#priceContainer input[data-key]').forEach(inp => {
            prices[inp.dataset.key] = inp.value;
        });
        const payload = { settings, prices };
        const res = await fetch('/api/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await res.json();
        if (result.success) {
            showToast('تم حفظ الإعدادات بنجاح', 'success');
        } else {
            showToast('فشل حفظ الإعدادات', 'error');
        }
    } catch (e) {
        console.error('Save error:', e);
        showToast('خطأ أثناء الحفظ', 'error');
    }
}

// Simple toast helper (uses existing toast container in admin.html)
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => container.removeChild(toast), 3000);
}

// Attach event listeners after DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    const saveBtn = document.getElementById('saveSettingsBtn');
    if (saveBtn) saveBtn.addEventListener('click', saveData);
});
