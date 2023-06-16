const form = document.querySelector('form')
const colorPickerEl = document.getElementById("color-picker")
const colorModeEl = document.getElementById("color-mode")


// fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome&count=5")
//   .then(res => res.json())
//   .then(data => console.log(data))


form.addEventListener("submit", event => {
  event.preventDefault()
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerEl.value.slice(1)}&mode=${colorModeEl.value}&count=5`)
    .then(res => res.json())
    .then(data => {
      data.colors.forEach(color => {
        console.log(color.hex.value)
      });
    })
  
})