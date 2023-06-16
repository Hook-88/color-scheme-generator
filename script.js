import {getColorBarsHTML, getColorHexValHTML} from "./helpers.js"
import {form, colorPickerEl, colorModeEl, colorBarsConatiner, hexcodeContainer} from "./htmlEls.js"

let colorsArray = []

form.addEventListener("submit", event => {
  event.preventDefault()
  render()
})

form.addEventListener("change", () => render())

function render() {
  colorsArray = []
  getColors() 
}

function getColors() {
  let arr = []
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerEl.value.slice(1)}&mode=${colorModeEl.value}&count=5`)
    .then(res => res.json())
    .then(data => {      
      data.colors.forEach(color => {
        colorsArray.push(color.hex.value)
      })
      setInnerHTML()
    })
}

function setInnerHTML() {
  colorBarsConatiner.innerHTML = getColorBarsHTML(colorsArray)
  hexcodeContainer.innerHTML = getColorHexValHTML(colorsArray)
}

render()

