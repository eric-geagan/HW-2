const loops = 3
let userInputs = []
screen2.style.display = 'none'

function getUserInputs() {
  for(let i = 0; i < loops; i++) {
    let text = prompt('Please enter a word')
    userInputs.push(text)
  }

  userInputs.forEach((item, i) => {
    let list = document.createElement('li')
    let node = document.createTextNode(item)
    list.appendChild(node)
    document.getElementById('list1').appendChild(list)
  })

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

  newArray.forEach((text, i) => {
    let list = document.createElement('li')
    let node = document.createTextNode(text)
    list.appendChild(node)
    document.getElementById('list2').appendChild(list)
  })

  document.getElementById('changer').remove()
}
