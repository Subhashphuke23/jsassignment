function calc() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var oper = document.getElementById('oparators').value;
    if (oper === '+') {
        document.getElementById('result').value = n1 + n2;
    }
    if (oper === '-') {
        document.getElementById('result').value = n1 - n2;
    }
    if (oper === '/') {
        document.getElementById('result').value = n1 / n2;
    }
    if (oper === '*') {
        document.getElementById('result').value = n1 * n2;
    }
}
function clearFields(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("oparators").value = "";
    document.getElementById("result").value = "";
}   