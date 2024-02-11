function handelOnclick() {
    const handalerStatus=document.getElementById('handaler-status');
    handalerStatus.innerText='Handel by function attach with onclick attributes';
}
// option2
document.getElementById('add-even-listiner').addEventListener('click',function () {
    const handalerStatus=document.getElementById('handaler-status');
    handalerStatus.innerText='Text Update By Add Even Listiner';
})
// option 2 recape
document.getElementById('button-update').addEventListener('click',function () {
    const inputField=document.getElementById('input-field');
    const inputText=inputField.value;
    const p=document.getElementById("input-text-value");
    p.innerText=inputText;
    inputField.value='';
})