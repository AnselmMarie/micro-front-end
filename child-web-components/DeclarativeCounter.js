class DeclarativeCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.currentCount = newVal;
    this.update();
  }

  connectCallback() {
    this.currentCount = this.getAttribute('count') || 0;
    this.update();
  }

  disconnectedCallback() {
    alert('DeclarativeCounter removed from page.');
  }

  update() {
    this.shadow.innerHTML = `<div><b>Count:</b> ${this.currentCount}</div>`;
  }
}

window.customElements.define('d-counter', DeclarativeCounter);