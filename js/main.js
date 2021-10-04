function clicou() {
  //  alert('Obrigado por clicar')
  document.getElementById('Agradecimento').innerHTML = 'Obrigado por clicar'
}

function redirecionar() {
  window.open('https://hermes.digitalinnovation.one/assets/logos/dio-white.png')
  // window.location.href = 'https://hermes.digitalinnovation.one/assets/logos/dio-white.png'
}

function trocar(elemento) {
  //document.getElementById('mousemove').innerHTML = 'Obrigado por Passar o mouse'
  elemento.innerHTML = 'Obrigado por Passar o mouse'
  //alert('trocar texto')
}

function voltar(elemento) {
  //  document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui'
  elemento.innerHTML = 'Passe o mouse aqui'
}

function load() {
  alert('Página carregada')
}

function funcaoChange(elemento) {
  console.log(elemento.value)
}

/*
function soma(n1, n2) {
  return n1 + n2
}
*/

/*
function validaIdade(idade) {
  var validar
  if (idade >= 18) {
    validar = true
  } else {
    validar = false
  }
  return validar
}

var idade = prompt('Qual sua idade?')
console.log(validaIdade(idade))

*/

//alert(soma(5, 10))

//===============Datas==================//
/*
var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

//============== Estrutura de Repetição======//
//-------------For -------------------//
/*
var count
for (count = 0; count <= 5; count++) {
  alert(count)
}
*/

// ----------- while ------------//
/*
var count = 0
while (count <= 5) {
  console.log(count)
  alert(count)
  count++
}
*/

//================Condicionais===============//
/*var idade = prompt('qual sua idade')
if (idade >= 18) {
  alert('maior de idade')
} else {
  alert('menor de idade')
}
*/

//================Arrey====================//
/*var frutas = [
  { nome: 'maçã', cor: 'Vermelha' },
  { nome: 'uva', 25cor: 'Roxa' }
]
console.log(frutas)
alert(frutas[1].nome)
*/

/*
var fruta = { nome: 'maçã', cor: 'Vermelha' }
console.log(fruta.nome)
alert(fruta.cor)*/

//var lista = ['maçã', 'pera', 'laranja']
//lista.push('uva') /*acrescenta ítem ao final da lista*/

//lista.pop() /*retira ítem do final da lista*/

//console.log(lista) /*mostra a lista*/

//console.log(lista.toString()) /*transforma a lista em string */

//console.log(lista.join(' - '))

//console.log(lista.length) /*mostra o tamanho da lista*/

//console.log(lista.reverse()) /*mostra a lista de tras pra frente*/

//alert(lista)

//============= Variables and operators =====//
/*var nome = 'Igor Santos'
var n1 = 5
var n2 = 3
var frase = 'Japão é o melhor time do mundo'
//alert(nome + ' Tem ' + idade + ' anos')
//alert(idade + idade2)
console.log(nome)
console.log(n1 * n2)
console.log(frase.toLowerCase())
alert(frase.replace('Japão', 'Brasil'))
*/
