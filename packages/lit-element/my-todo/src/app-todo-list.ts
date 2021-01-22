import { css, customElement, html, LitElement, property } from 'lit-element'
import { general } from './general';



@customElement('app-todo-list')
export class AppTodoList extends LitElement {

  
    
  @property() 
  myToDos:{text:string}[] =[]

  

  static get styles() {
    return[ general, css``]
  }
  render() {
    return html`<ul>${this.myToDos.map(todo =>html`<li>${todo.text}</li>`)}</ul>`
  }
}

// ingresa el todo por el input
// guarda el valor el estado y con el evento click del boton lo pushea al array de todos