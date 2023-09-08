let saveIt = document.getElementById('saver')
let countNum = document.getElementById("count")
console.log(countNum)
countVal = 0

function add() {
    countVal = countVal + 1
    countNum.innerHTML = countVal
    console.log(countVal)
}

function sub() {
    countVal = countVal - 1
    countNum.textContent = countVal
    console.log(countVal)
}

function resetNum() {
    countVal = 0
    countNum.textContent = countVal
    console.log("Reset:" + " " + countVal)
    let countStr = 'Prev Entries' + ": "
    saveIt.textContent = countStr
}

function save() {
    let countStr = countVal + " - "
    saveIt.textContent += countStr
}

let lighted = document.getElementById('reverse')
let topText = document.querySelector('.head')
let mode = document.querySelector('.toggle')
let body = document.querySelector('body')
toggle = () => {
   body.style.backgroundColor = '#000000'
   topText.style.color = '#ffffff'
   countNum.style.color = '#ffffff'
   saveIt.style.color = '#ffffff'
   mode.style.backgroundColor = '#ffffff'
   mode.style.color = '#000000'
   mode.style.display = 'none'
   lighted.style.display = 'block'
}


backToLight = () => {
    lighted.style.display = 'none'
    body.style.backgroundColor = '#ffffff'
    topText.style.color = '#000000'
    countNum.style.color = '#000000'
    saveIt.style.color = '#000000'
    mode.style.display = 'block'
    mode.style.backgroundColor = '#000000'
    mode.style.color = '#ffffff'
}