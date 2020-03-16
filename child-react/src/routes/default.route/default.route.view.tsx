/* Node Module */
import React from 'react';
import ReactDOM from 'react-dom';

class DefaultRoute extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.eventOne).addEventListener('mouseover', () => this.mouseEnter());
  }

  mouseEnter() {
    console.log('mouse enter');
  }

  render() {
    return <div ref="eventOne">Hi</div>;
  }
}

export default DefaultRoute;
