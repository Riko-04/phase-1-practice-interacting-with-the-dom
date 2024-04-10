let counter = document.getElementById('counter')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let submit = document.getElementById('submit')
let commentInput = document.getElementById('comment-input')
let list = document.getElementById('list')

let count = 0
let likes = {}
let timer = null

function incrementCounter() {
  count++
  counter.innerText = count
}

function decrementCounter() {
  count--
  counter.innerText = count
}

function likeNumber() {
  likes[count] = likes[count] ? likes[count] + 1 : 1

  let li = document.createElement('li')
  li.innerText = `${count} has been liked ${likes[count]} time(s)`
  document.querySelector('.likes').appendChild(li)
}

function togglePause() {
  if (timer) {
    clearInterval(timer)
    timer = null
    pause.innerText = 'resume'
  } else {
    timer = setInterval(incrementCounter, 1000)
    pause.innerText = 'pause'
  }
}

function addComment(e) {
  e.preventDefault()

  let p = document.createElement('p')
  p.innerText = commentInput.value
  list.appendChild(p)

  commentInput.value = ''
}

window.addEventListener('DOMContentLoaded', (event) => {
  timer = setInterval(incrementCounter, 1000)

  minus.addEventListener('click', decrementCounter)
  plus.addEventListener('click', incrementCounter)
  heart.addEventListener('click', likeNumber)
  pause.addEventListener('click', togglePause)
  submit.addEventListener('click', addComment)
})
