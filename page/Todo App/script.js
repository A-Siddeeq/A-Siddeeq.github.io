let addTask = document.querySelector('p')
let screen = document.querySelector('input')
let delAll = document.getElementById('delAll')
let delOne = document.getElementById('del')

newTask = () => {

      let added = `<li> ${screen.value} <button onclick="deltd(this)">delete item</button></li>`
      addTask.insertAdjacentHTML('beforeend', added)
    screen.value = ''
}

delAll.addEventListener('click', () =>{
    addTask.innerHTML = ''
})

function deltd(x) {
   x.parentElement.remove()
}