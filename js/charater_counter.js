const my_text_area = document.getElementById('my-textarea');
const remaining_char = document.getElementById('my-textarea-remaining-char');
const MAX_CHARS = 250;

my_text_area.addEventListener('input', () => {
    const remaining = MAX_CHARS - my_text_area.value.length;
    const color = remaining < MAX_CHARS * 0.1 ? 'red' : null;

    remaining_char.textContent = `${remaining} characters remaining.`;
    remaining_char.style.color = color;
});
