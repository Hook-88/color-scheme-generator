import {getColorBarsHTML, getColorHexValHTML} from "./helpers.js"
import {form, colorPickerEl, colorModeEl, colorBarsConatiner, hexcodeContainer} from "./htmlEls.js"

let colorsArray = []

form.addEventListener("submit", event => {
  event.preventDefault()
  render()
})

form.addEventListener("change", () => render())

colorBarsConatiner.addEventListener("click", event => {
  // console.log(getHexValue(event.target.style.backgroundColor))
  getHexValue(event.target.style.backgroundColor) 
})

hexcodeContainer.addEventListener("click", event => {
  navigator.clipboard.writeText(event.target.textContent)
})

function render() {
  colorsArray = []
  getColors() 
}

function getColors() {
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

function getHexValue(rbgStr) {
  fetch(`https://www.thecolorapi.com/id?rgb=${rbgStr}`)
    .then(res => res.json())
    .then(data => {
      navigator.clipboard.writeText(data.hex.value)
      // return data.hex.value
    })
}

render()




