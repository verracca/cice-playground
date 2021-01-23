import { createTodo } from './create-todo.js'
console.log('lol')

function init() {
  const button = document.querySelector('button')

  button.addEventListener('click', () => {
    createTodo()
  })
}

init()
