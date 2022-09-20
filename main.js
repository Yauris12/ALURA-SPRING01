const textInput = document.querySelector('#text-input')
const asideImage = document.querySelector('.aside-image')
const textencriptado = document.querySelector('.text-encriptado')
const valueEnc = document.querySelector('.value_enc')

const noMessage = () => {
  asideImage.style.display = 'block'
  textencriptado.style.display = 'none'
}

console.log(valueEnc)
const btn_encriptar = () => {
  let validacion = /[^(a-z)|(\s)]/g

  if (!textInput.value) {
    return noMessage()
  }

  if (validacion.test(textInput.value)) {
    return alert('Solo letras minúsculas y sin acentos')
  }

  const textoEncriptado = encriptar(textInput.value)
  textInput.value = ''
  asideImage.style.display = 'none'
  textencriptado.style.display = 'flex'
  valueEnc.textContent = textoEncriptado
}

const btn_desencriptar = () => {
  let validacion = /[^(a-z)|(\s)]/g
  if (!textInput.value) {
    return noMessage()
  }

  if (validacion.test(textInput.value)) {
    return alert('Solo letras minúsculas y sin acentos')
  }

  const textoEncriptado = desencriptar(textInput.value)
  textInput.value = ''
  asideImage.style.display = 'none'
  textencriptado.style.display = 'flex'
  valueEnc.textContent = textoEncriptado
}

const encriptar = (text) => {
  let letrasEncript = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat'],
    ['a', 'ai'],
  ]

  for (let i = 0; i < letrasEncript.length; i++) {
    if (text.includes(letrasEncript[i][0])) {
      text = text.replaceAll(letrasEncript[i][0], letrasEncript[i][1])
    }
  }

  return text
}

const desencriptar = (text) => {
  let letrasEncript = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat'],
    ['a', 'ai'],
  ]

  for (let i = 0; i < letrasEncript.length; i++) {
    if (text.includes(letrasEncript[i][1])) {
      text = text.replaceAll(letrasEncript[i][1], letrasEncript[i][0])
    }
  }

  return text
}

const btnCopy = () => {
  // valueEnc.select()

  console.log(valueEnc.textContent)
  navigator.clipboard.writeText(valueEnc.textContent)

  alert('Mensaje copiado exitosamente')
}
