const hash_update = document.getElementById('hash-update');

window.addEventListener('hashchange', () => {
    hash_update.textContent = window.location.hash.substring(1);
});
