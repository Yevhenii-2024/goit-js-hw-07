const textInput = document.querySelector('input#name-input');
const spanText = document.querySelector('span#name-output');

textInput.addEventListener('input', userText);

function userText(event) {
    const inputText = event.target.value.trim();
    if (inputText) {
        spanText.textContent = inputText;
    } else {
        spanText.textContent = 'Anonymous';
    }
}
