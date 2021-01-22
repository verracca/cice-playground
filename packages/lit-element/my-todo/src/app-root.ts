import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('app-root')
export class AppRoot extends LitElement {
  @property() myToDos = [
    { text: 'Enviar mail a tu amiga' },
    { text: 'Enviar carta a tu mama por correo' },
  ]

  onToDoCreate(event: CustomEvent) {
    this.myToDos = [...this.myToDos, event.detail]
  }

  static get styles() {
    return css``
  }
  render() {
    return html`<main>
      <app-todo-create @on-todo-created=${this.onToDoCreate}></app-todo-create>
      <app-todo-list .myToDos="${this.myToDos}"></app-todo-list>
    </main>`
  }
}
