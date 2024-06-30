let inputText = document.getElementById("input");
let inputedText = document.getElementById("text-input");
const checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", () => {
    const text = inputText.value.replace(/\s/g, ''); // Remove whitespace and convert to lowercase

    inputedText.innerText = text;
    inputText.value = "";
});