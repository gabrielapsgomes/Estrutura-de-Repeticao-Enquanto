/*EXERCICIO 20- Estrutura de Repetição
let count = 0

while (true) {

    let mensagemRaiz = parseInt(prompt('Digite seu número'))
    let result = mensagemRaiz ** 0.5
    if (mensagemRaiz === 0) {
        break;
    }
    if (result % 1 === 0) {
        count++
        console.log(`Quantidade quadrados perfect foram contandos:${count}`)

    }
}*/


/*EXERCICIO 21- Estrutura de Repetição
let test = parseInt(prompt('Digite seu número'))
let count = 0
let countNo = 0
for (i = 0; i <= test; i++) {
    if (test % i === 0) {
        count++
    }
}
if (count === 2) {
    alert('Seu número é primo')
} else {
    alert('Seu número não é primo')*/



/*EXERCICIO 22- Estrutura de Repetição
let a = parseInt(prompt('Digite seu dividendo ')) // 36 - 6 -6 -6 -6 -6  - 6 = 0  = 6
let b = parseInt(prompt('Digite seu divisor')) //
let count = 0

for (i = a; i >= b; i -= b) {
    count++
}
console.log(`Valor do seu quaociente foi: ${count}`)*/



/*EXERCICIO 23- Estrutura de Repetição
let num = parseInt(prompt('Digite um número'))
let count = 0
for (i = 1; i <= num; i += 2) {
    num -= i
    count++

}
console.log(`Seu resultado da raiz quadrada foi:${count}`)*/


/*EXERCICIO 24- Estrutura de Repetição
let count = 0

for (i = 0; i < 5; i++) {
    let variavelA = parseInt(prompt("Digite algum valor para a variavel A"))
    if (variavelA < 0) {
        count++
    }
}
console.log(`A quantidade de numeros negativos é${count}`)*/


/*EXERCICIO 25- Estrutura de Repetição
let countFeminino = 0
let countMasculino = 0

let somaDoSalarioFeminino = 0
let somaDoSalarioMasculino = 0

while (true) {

    let sexo = prompt("Digite seu gênero")
    let horas = parseInt(prompt("Digite suas horas trabalhadas"))
    let codigo = parseInt(prompt("Digite seu código"))

    let salarioBruto = 26.90 * horas
    let salarioLiquido = 0

    if (codigo == -11) {
        break;
    }
    if (sexo === "feminino") {
        salarioLiquido = salarioBruto - (salarioBruto * 6) / 100
        somaDoSalarioFeminino = salarioLiquido
        countFeminino++
    }
    if (sexo === "masculino") {
        salarioLiquido = salarioBruto - (salarioBruto * 10) / 100
        somaDoSalarioMasculino = salarioLiquido
        countMasculino++
    }
}
console.log(`A média do salario liquido feminino é ${somaDoSalarioFeminino / countFeminino}
 A média do salario liquido masculino é ${somaDoSalarioMasculino / countMasculino}`)*/


/*EXERCICIO 26- Estrutura de Repetição*/
let countSalario = 0
let countFilhos = 0

let caixa = 0
let caixa1 = 0

while (true) {

    let salario = parseInt(prompt("Qual o valor do seu salário?"))
    let filhos = parseInt(prompt("Quantos filhos você tem?"))

    if (salario < 0) {
        break;
    }
    caixa += salario
    countSalario++

    caixa1 += filhos
    countFilhos++
}
console.log(`A media do salario é ${caixa / countSalario} 
A media do numero de filhos é ${caixa1 / countFilhos}`)



/*EXERCICIO 27- Estrutura de Repetição*/