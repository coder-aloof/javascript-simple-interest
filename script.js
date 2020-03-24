function calculateSI() {

    const p = parseFloat(document.getElementById('principal').value);
    const n = parseFloat(document.getElementById('years').value);
    const r = parseFloat(document.getElementById('rate').value);

    const SI = (p * n * r) / 100;
    document.getElementById('result').innerHTML = SI;
    return false;

}