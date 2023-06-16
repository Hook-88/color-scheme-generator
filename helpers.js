function getColorBarsHTML(arr) {
  return arr.reduce((acc, curr) => {
    return acc + `<div style="background-color: ${curr}"></div>`
  }, "")
}

function getColorHexValHTML(arr) {
  return arr.reduce((acc, curr) => {
    return acc + `<li>${curr}</li>`
  },"")
}

export {getColorBarsHTML, getColorHexValHTML}