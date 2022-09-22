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


/*EXERCICIO 26- Estrutura de Repetição
let countSalario = 0
let countFilhos = 0
let count = 0

let guardar = 0
let temporaria = 0

let countPessoas = 0

let caixa = 0
let caixa1 = 0

while (true) {

    let salario = parseInt(prompt("Qual o valor do seu salário?"))
    let filhos = parseInt(prompt("Quantos filhos você tem?"))

    if (salario < 0 && filhos < 0) {
        break;
    }
    if (salario > temporaria) {
        temporaria = salario
    }
    if (salario <= 100) {
        count++
    }

    caixa += salario
    countSalario++

    caixa1 += filhos
    countFilhos++
    countPessoas++
}
guardar = (count * 100) / countPessoas

console.log(`A media do salario da população é R$${caixa / countSalario} 
A media do numero de filhos é ${caixa1 / countFilhos}
O maior salario da população é R$${temporaria}
O percentual de pessoas com salário até R$100 é ${guardar}%`)*/

/*
4  100
2   x    

4x = 200 
x = 200 / 4

x=50
*/

/*EXERCICIO 27- Estrutura de Repetição
let countZe = 0
let countChico = 0

let ze = 110
let chico = 150

while (ze < chico) {
    ze += 3
    countZe++

    if (chico >= ze) {
        chico += 2
        countChico++
    }
}
console.log(`Serão necessário ${countZe} anos para Zé ser maior que Chico`)
console.log(countChico)*/