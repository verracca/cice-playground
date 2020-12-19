import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-todo-create')
export class AppTodoCreate extends LitElement {
  todoText = ''

  addTodo() {
    const customEvent = new CustomEvent('on-todo-created', {
      bubbles: true,
      composed: true,
      detail: {
        text: this.todoText,
      },
    })
    this.dispatchEvent(customEvent)
  }

  onChange(e: any) {
    this.todoText = e.target.value
  }

  static get styles() {
    return css``
  }
  render() {
    return html`<header>
      <input @change="${this.onChange}" /><my-button @click="${this.addTodo}"></my-button>
    </header>`
  }
}
