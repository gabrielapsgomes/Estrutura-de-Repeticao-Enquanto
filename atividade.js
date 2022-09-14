/*EXERCICIO 1- Estrutura de Repetição
for (i = 0; i <= 40; i++) {
    console.log(i)
}*/


/*EXERCICIO 2- Estrutura de Repetição
for (i = 10; i <= 40; i++) {
    console.log(i)
}*/


/*EXERCICIO 3- Estrutura de Repetição
const m = 10
const n = 40
for (i = m + 1; i <= n; i++) {
    console.log(i)
}*/


/*EXERCICIO 4- Estrutura de Repetição
for (i = 0; i <= 11; i++) {
    if ((i % 2 === 1)) {
        console.log(i)
    }
}*/


/*EXERCICIO 5- Estrutura de Repetição
const janela = parseInt(prompt("digite um numero"))
const numeroN = 40
let contador = 0
for (i = janela; i <= numeroN; i++) {
    if (i % 2 === 0) {
        console.log(i)
        contador++
    }
}
console.log(Sua quantidade de numeros pares é ${contador})*/



/*EXERCICIO 6- Estrutura de Repetição
const m = 6
const n = 36
for (i = m; i <= n; i++) {
    console.log(i / 3)
}*/


/*EXERCICIO 7- Estrutura de Repetição
const m = 6
let n = 8
let i = 2
for (i = m; i <= n; i++) {
    console.log(i)
}*/


/*EXERCICIO 8- Estrutura de Repetição
const quantidade = parseInt(prompt("digite a quantidade de numeros para rodar"));
 let numeroMaior = 0;
 let numeroMenor = 999;
  for (i = 0; i <= quantidade; i++) {
 let valor = parseInt(prompt("Digite seu número"));
  if (valor > numeroMaior) {
     numeroMaior = valor;
    console.log(o número maior é ${numeroMaior});
    } else {
   numeroMenor = valor
 console.log(O número menor é ${numeroMenor})
   }
  }/*


 /*EXERCICIO 9- Estrutura de Repetição
const condicao = true

let primeiroMaior = 0
let segundoMaior = 0
let terceiroMaior = 0

let temp = 0
let temp2 = 0

while (condicao) {
    let numero = parseInt(prompt("Digite um numero"))
    if (numero === -1) {
        break;

    } else if (numero > primeiroMaior) {
        terceiroMaior = segundoMaior
        segundoMaior = primeiroMaior
        primeiroMaior = numero
    } else if (numero > segundoMaior) {
        terceiroMaior = segundoMaior
        segundoMaior = numero
    } else {
        terceiroMaior = numero
    }


}
console.log(Primeiro número ${primeiroMaior},
Segundo número ${segundoMaior},
Terceiro número ${terceiroMaior} )*/



/*EXERCICIO 10- Estrutura de Repetição
const quantidade = parseInt(prompt('Qual a quantidade de numeros?'))

for (i = 0; i < quantidade; i++) {
    let m = parseInt(prompt('Valor do M'))
    let n = parseInt(prompt('Valor do N'))
    let result = m + n
    console.log(${m},${n}, Seu resultado é )
    if (n > m) {
        console.log(result)
    } else {

    }
}*/


/*EXERCICIO 11- Estrutura de Repetição
let contador = 0
const quantidade = parseInt(prompt("digite a quantidade de numeros para rodar"));
if (quantidade === -1) {
    for (i = quantidade; i <= quantidade; i++) {
        contador++
        console.log(i)
    }
}*/


/*exercicio 12- Repetiçao
let condicao = true

let result = 0

while (condicao) {
    let numero1 = parseInt(prompt('Digite o primeiro número'))
    let numero2 = parseInt(prompt('Digite o segundo número'))

    if (numero1 === -1 || numero2 === -1) {
        condicao = false;


    }

    result = numero1 + numero2 + result
    console.log(result)

}/*


/*exercicio 13 - Repetiçao
const condicao = true
let contandor = 0
let contaImpar = 0

while (condicao) {
    let numero = parseInt(prompt("Digite um numero"))
    if (numero === -1) {
        break;

    } if (numero % 2 === 0) {
        contandor++
        console.log(`Números pares ${contandor}`)
    } else if (numero % 2 === 1) {

        contaImpar++
        console.log(`Números impares ${contaImpar}`)
    }
}*/


/* exercicio 14 - Repetiçao
const inicio = true
let contMulti5 = 0
let contMulti3 = 0

while (inicio) {
    let numA = parseInt(prompt('Digite um número'))

    if (numA === -1) {
        break;
    } else if (numA % 2 === 0 && numA % 5 === 0) {
        contMulti5++
        console.log(`Quantidade total de múltiplos de 2 e 5 é: ${contMulti5}`)
    } else if (numA % 2 === 0 && numA % 3 === 0) {
        contMulti3++
        console.log(`Quantidade total de múltiplos de 2 e 3 : ${contMulti3}`)
    }
} /*


/*exercicio 15 - Repetiçao
let condicao = true
let totalPar = 0

let countPar = 0
let countImpar = 0
let totalNum = 0

while (condicao) {
    let numeros = parseInt(prompt('Digite os números'))
    totalNum += numeros

    if (numeros === 0) {
        break;
    } else if (numeros % 2 === 0) {
        countPar++
        totalPar += numeros
    } else if (numeros % 2 === 1) {
        countImpar++

    }
}
console.log(`Quantidade média de pares ${(totalPar / countPar)}`);
console.log(`Quantidade média de par e impares ${totalNum / (countPar + countImpar)}`)
console.log(`Quantidade de números pares ${countPar}`);
console.log(`Quantidade de números impar ${countImpar}`);*/


/* exercicio 16 - Repetiçao)
let armario = 0
let guardar = ""
let valor = 0
let quantidade = parseInt(prompt("Informe a quantidade de médias"))

for (i = 0; i < quantidade; i++) {
    let medias = parseInt(prompt("Informe a média"))
    let nomes = prompt("Informe o nome")
    armario = medias;

    console.log(A media de ${nomes} é ${medias})
    if (armario > valor) {
        valor = armario
        guardar = nomes
    }
}
console.log(A maior média foi a de ${guardar}  e seu resultado é ${valor})

*/



/*EXERCICIO 17- Estrutura de Repetição
const condicao = true
let valores = 0
let countMedia = 0

while (condicao) {
    let nome = prompt("Informe o nome")


    if (nome === "fim") {
        break;
    }
    while(!isNaN(nome)) {
        alert('Insira só nomes ')
        nome = prompt("Insira um nome novamente")
        }

    let media = parseInt(prompt("Informe a média"))
    valores += media;
    countMedia++
}

console.log(`Quantidade de alunos ${countMedia} com sua média total: ${valores / countMedia}`)
*/



/*EXERCICIO 18- Estrutura de Repetição
const polegadas = 2.54
for (i = 0; i <= 20; i++) {
    console.log(i polegadas)
}*/


/*EXERCICIO 19- Estrutura de Repetição
const numero = 10
for (i = 1; i <= numero; i++) {
    console.log(i * numero)
}*/


