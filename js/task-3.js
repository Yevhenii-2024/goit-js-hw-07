const textInput = document.querySelector('input#name-input');
const spanText = document.querySelector('span#name-output');

textInput.addEventListener('input', userText);

function userText(text) {
    if (textInput.value.trim()) {
        spanText.textContent = textInput.value.trim();
    } else if (textInput.trim()) {
        spanText.textContent = 'Anonymous';
    }
}
