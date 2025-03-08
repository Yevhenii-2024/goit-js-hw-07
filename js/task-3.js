const textInput = document.querySelector('input#name-input');
const spanText = document.querySelector('span#name-output');

textInput.addEventListener('input', userText);

function userText(event) {
    const inputText = event.target.value.trim();
    if (inputText) {
        spanText.textContent = textInput.value.trim();
    } else {
        spanText.textContent = 'Anonymous';
    }
}
