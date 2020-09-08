/* Node Module */
import React from 'react';
import ReactDOM from 'react-dom';
/* Component */
import AppComponent from './app.view';
import retargetEvents from 'react-shadow-dom-retarget-events';

(() => {
  class ChildReactTwo extends HTMLElement {
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
      console.log('Inside Child React Two connected callback');
      this.attachShadow({ mode: 'open' });

      // eslint-disable-next-line import/no-webpack-loader-syntax
      const globalCss = require('!to-string-loader!css-loader!../../bootstrap.min.css');
      // eslint-disable-next-line import/no-webpack-loader-syntax
      const appCss = require('!to-string-loader!css-loader!./index.scss');
      console.log('globalCss', globalCss);
      console.log('appCss', appCss);
      {/* if (!this.shadowRoot) return;
      // eslint-disable-next-line import/no-webpack-loader-syntaxs
      // // eslint-disable-next-line import/no-webpack-loader-syntax
      // const detailsCss = require('!to-string-loader!css-loader!./Details.css');
      // <style>${appCss}</style>
      // <style>${detailsCss}</style> */}
      //
      this.shadowRoot.innerHTML = `
        <style>${globalCss}</style>
        <style>${appCss}</style>
        <div id="root"></div>
      `;

      // const stylesheet = document.createElement('style');
      // console.log('styles.toString()', styles.toString());
      // stylesheet.innerHTML = styles.toString();
      // this.shadowRoot.appendChild(stylesheet);

      this._mountPoint = this.shadowRoot.getElementById('root');
      this.onMessageReceived.bind(this);
      this.renderMainComponent();
      retargetEvents(this.shadowRoot);
    }

    disconnectedCallback() {
      console.log('Child React Two disconnectedCallback');
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

  customElements.define('child-react--element-two', ChildReactTwo);
})();
