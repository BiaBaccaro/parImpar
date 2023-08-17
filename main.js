document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    checkButton.addEventListener("click", function () {
        const inputValue = parseInt(numberInput.value);

        if (isNaN(inputValue)) {
            result.textContent = "Por favor, insira um valor.";
        } else {
            if (inputValue % 2 === 0) {
                result.textContent = "O número é par.";
            } else {
                result.textContent = "O número é ímpar.";
            }
        }
    });
});
