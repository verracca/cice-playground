import { LitElement, html, property, customElement } from 'lit-element';

@customElement('my-button')
export class myButton extends LitElement {
 @property() name = 'submit';

 render() {
   return html`<button> ${this.name}</button>`;
 }
}
