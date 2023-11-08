const inputDia = document.querySelector('#day');
const inputMes = document.querySelector('#month');
const inputAno = document.querySelector('#year');
const botao = document.querySelector('.botao');

const spanDia = document.querySelector('.spanDia')
const spanMes = document.querySelector('.spanMes')
const spanAno = document.querySelector('.spanAno')

const mensDia = document.querySelector('.resDia')
const mensMes = document.querySelector('.resMes')
const mensAno = document.querySelector('.resAno')

const dataAtual = new Date()

let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth() + 1;
let anoAtual = dataAtual.getFullYear();

const mesesMdia = [2, 4, 6, 9, 11]


botao.addEventListener('click', (event) => {
  event.preventDefault()
  verificacoes()
})

function verificacoes() {
  let dia = inputDia.value
  let mes = inputMes.value
  let ano = inputAno.value

  mensDia.innerText = '--'
  mensMes.innerText = '--'
  mensAno.innerText = '--'

  spanDia.classList.add('oculto')
  spanMes.classList.add('oculto')
  spanAno.classList.add('oculto')

  if (ano.length == 0) {
    spanAno.innerText = 'this field is required'
    spanAno.classList.remove('oculto')
  }

  if (ano > anoAtual) {
    spanAno.innerText = 'Must be in the past'
    spanAno.classList.remove('oculto')
  }

  if (mes > 12 || mes < 1) {
    if (mes.length == 0) {
      spanMes.innerText = 'this field is required'
      spanMes.classList.remove('oculto')
    } else {
      spanMes.innerText = 'Must be a valid month'
      spanMes.classList.remove('oculto')
    }
  }

  if (dia > 31 || dia < 1) {
    if (dia.length == 0) {
      spanDia.innerText = 'this field is required'
      spanDia.classList.remove('oculto')
    } else {
      spanDia.innerText = 'Must be a valid day'
      spanDia.classList.remove('oculto')
    }
  } else {
    for (i = 0; i < mesesMdia.length; i++) {
      if (dia == 31 && mes == mesesMdia[i]) {
        spanDia.innerText = 'Must be a valid Date'
        spanDia.classList.remove('oculto')
        mensDia.innerText = '--'
        mensMes.innerText = '--'
        mensAno.innerText = '--'
        break
      }
      calcula()
    }
  }
}


function calcula() {
  let dia = parseInt(inputDia.value)
  let mes = parseInt(inputMes.value)
  let ano = parseInt(inputAno.value)

  if (dia.length == 0 || mes.length == 0 || ano.length == 0 || ano > anoAtual) {
    mensDia.innerText = '--'
    mensMes.innerText = '--'
    mensAno.innerText = '--'
  } else {
    resAno = anoAtual - ano

    if (dia >= diaAtual) {
      resDia = dia - diaAtual
    } else {
      resDia = diaAtual - dia
    }
    if (mes < mesAtual) {
      resMes = mesAtual - mes
    } else if (mes == mesAtual) {
      resMes = 12 - mesAtual + mes
    }

    if (mes == mesAtual) {
      resAno = resAno - 1
    }

    if (resMes == 12 && dia > diaAtual) {
      resMes = resMes - 1
    } else if (resMes == 12 && dia <= diaAtual) {
      resMes = resMes * 0
      resAno += 1
    }
    mensDia.innerText = resDia
    mensMes.innerText = resMes
    mensAno.innerText = resAno
  }
  console.log([resAno, resMes, resDia])
}
