function sumar(){
    let texto = parseInt(document.getElementById("input").value);
    let texto2 = parseInt(document.getElementById("output").value);
    alert(texto + texto2);
    //document.getElementById("titulo").textContent = texto2;
}

function restar(){
    let input1 = parseInt(document.getElementById("input").value);
    let input2 = parseInt(document.getElementById("output").value);
    alert(input1 - input2);
}

function multiplicar(){
    let input1 = parseInt(document.getElementById("input").value);
    let input2 = parseInt(document.getElementById("output").value);
    alert(input1 * input2);
}


document.addEventListener("DOMContentLoaded", () => {

});