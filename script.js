function convert() {
    const numberInput = document.getElementById('numberInput').value;
    const baseSelect = document.getElementById('baseSelect');
    const resultBaseSelect = document.getElementById('resultBaseSelect');
    const resultElement = document.getElementById('result');

    const baseFrom = parseInt(baseSelect.value);
    const baseTo = parseInt(resultBaseSelect.value);

    const decimalValue = parseInt(numberInput, baseFrom);
    const resultValue = decimalValue.toString(baseTo).toUpperCase();
    resultElement.innerText = isNaN(decimalValue) ? 'Entrez un nombre valide' : resultValue;
}
