/* Node Module */
import React from 'react';
import ReactDOM from 'react-dom';
/* Component */
import AppComponent from './app.view';
import retargetEvents from 'react-shadow-dom-retarget-events';

(function () {
  class ChildReact extends HTMLElement {
    static get observedAttributes() {
      return ['state'];
    }

    get _state() {
      return this._statePrivate;
    }

    set _state(value) {
      this._statePrivate = value;
    }

    get _mountPoint() {
      return this._mountPointPrivate;
    }

    set _mountPoint(value) {
      this._mountPointPrivate = value;
    }

    get state() {
      return this.getAttribute('state');
    }

    set state(value) {
      this.setAttribute('state', value);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === 'state') {
        console.log('Product element received state', newVal);
        this._state = newVal;
      }
      this.renderMainComponent();
    }

    connectedCallback() {
      console.log('Inside Child React connected callback');
      this.attachShadow({ mode: 'open' });
      if (!this.shadowRoot) return;
      // eslint-disable-next-line import/no-webpack-loader-syntax
      // const appCss = require('!to-string-loader!css-loader!./App.css');
      // // eslint-disable-next-line import/no-webpack-loader-syntax
      // const detailsCss = require('!to-string-loader!css-loader!./Details.css');
      // <style>${appCss}</style>
      // <style>${detailsCss}</style>
      this.shadowRoot.innerHTML = `
          <div id="root"></div>
      `;

      this._mountPoint = this.shadowRoot.getElementById('root');
      this.onMessageReceived.bind(this);
      this.renderMainComponent();
      retargetEvents(this.shadowRoot);
    }

    disconnectedCallback() {
      console.log('Custom square element removed from page.');
    }

    onMessageReceived(message) {
      let evt = new CustomEvent('message', { bubbles: true, cancelable: true, detail: message });
      this.dispatchEvent(evt);
    }

    renderMainComponent() {
      if (this._mountPoint) {
        ReactDOM.render(<AppComponent state={this._state} onInit={this.onMessageReceived.bind(this)} />, this._mountPoint);
      }
    }
  }

  customElements.define('child-react-element', ChildReact);
})();
