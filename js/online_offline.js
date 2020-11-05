const oo_update = document.getElementById('oo_update');

if (navigator.onLine) {
    oo_update.textContent = 'we are online';
    oo_update.style.color = 'green';
}

window.addEventListener('online', function () {
    oo_update.textContent = 'we are online';
    oo_update.style.color = 'green';
});

window.addEventListener('offline', function () {
    oo_update.textContent = 'we are offline';
    oo_update.style.color = 'red';
});
