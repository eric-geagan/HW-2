const loops = 3
let userInputs = []
screen2.style.display = 'none'
// Homework 2

function getUserInputs() {
  for(let i = 0; i < loops; i++) {
    let text = prompt('Please enter a word')
    userInputs.push(text)
  }

  createList(userInputs, 'list1')
  
  let newButton = document.createElement('button')
  newButton.innerHTML = 'Change the words!'
  newButton.onclick = function() {
    scrambleWords(userInputs)
  }
  newButton.id = 'changer'
  document.body.appendChild(newButton)
  document.getElementById('start').remove()
}

function scrambleWords(items) {
  screen1.style.display = 'none'
  screen2.style.display = 'block'

  let newArray = userInputs.map(item => {
    return item.charAt(item.length - 1) + item.substring(1, item.length - 1) + item.charAt(0)
  })

  createList(newArray, 'list2')

  document.getElementById('changer').remove()
}

function createList(listItems, listId) {
  listItems.forEach(item => {
    let list = document.createElement('li')
    let node = document.createTextNode(item)
    list.appendChild(node)
    document.getElementById(listId).appendChild(list)
  })
}