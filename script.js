const form = document.querySelector('form')
const colorPickerEl = document.getElementById("color-picker")
const colorModeEl = document.getElementById("color-mode")
const colorBarsConatiner = document.querySelector("main")
const hexcodeContainer =  document.querySelector("footer ul")
let colorsArray = []

form.addEventListener("submit", event => {
  event.preventDefault()
  colorsArray = []
  getColors() 
})

function getColors() {
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerEl.value.slice(1)}&mode=${colorModeEl.value}&count=5`)
    .then(res => res.json())
    .then(data => {      
      data.colors.forEach(color => {
        colorsArray.push(color.hex.value)
      })
      render()
    })
}

function render() {
  let htmlMain = ""
  let htmlFooter = ""
  colorsArray.forEach(color => {
    htmlMain += `
      <div style="background: ${color}"></div>
    `
    htmlFooter += `
      <li>${color}</li>
    `
  })
  colorBarsConatiner.innerHTML = htmlMain
  hexcodeContainer.innerHTML = htmlFooter
}

getColors()
