var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var res = document.getElementById('res')

function somar() {
 const v1 = parseFloat(n1.value)
 const v2 = parseFloat(n2.value)
    let n3 = v1 +v2
        res.innerHTML += ` O resultado da sua soma é : <strong>${n3}</strong>`
 
}

function subtrair() {
    const v1 = parseFloat(n1.value)
    const v2 = parseFloat(n2.value)
     let n3 = v1 - v2
        res.innerHTML += `O resultado da sua Subtração é de : <strong>${n3}</strong>`
}


function dividir() {
    const v1 = parseFloat(n1.value)
    const v2 = parseFloat(n2.value)
     let n3 = v1 / v2
        res.innerHTML += `O resultado da sua Divisão é de : <strong>${n3}</strong>`
}

function multiplicar() {
    const v1 = parseFloat(n1.value)
    const v2 = parseFloat(n2.value)
     let n3 = v1 * v2
        res.innerHTML += `O resultado da sua Multiplicação é de : <strong>${n3}</strong>`
}

function limpar() {
    Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      );
    res.innerHTML = ''
}