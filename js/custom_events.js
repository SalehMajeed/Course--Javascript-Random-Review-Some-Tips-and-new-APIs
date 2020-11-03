const header_tag = document.getElementById('number');

header_tag.addEventListener('number_changed', function (e) {
    header_tag.textContent = e.detail.number;
    header_tag.style.color = e.detail.text_color;
});

function change_number(n, c) {
    const event = new CustomEvent('number_changed', {
        detail: {
            number: n,
            text_color: c,
        },
    });
    header_tag.dispatchEvent(event);
}
