/* Node Module */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const DefaultRoute = (): JSX.Element => {
  useEffect(() => {
    ReactDOM.findDOMNode(eventOne.current).addEventListener('mouseover', () => mouseEnter());
  }, []);

  const eventOne = useRef();
  const eventTwo = useRef();

  const mouseEnter = () => {
    // alert('mouse enter');
  };

  const change = () => {
    // alert('on change');
  };

  const click = (e) => {
    console.log('e', e);
    e.preventDefault();
    alert('click');
  };

  const mySubmit = (e) => {
    console.log('e', e);
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    alert(city);
    alert(country);
  }

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <span>Menu</span>
        <p><Link to="/">Root</Link></p>
        <p><Link to="/child-react/data-table">Child React - child page</Link></p>
        <p><Link to="/child-react-two/testing">Child React 2 - child page</Link></p>
      </div>

      <form onSubmit={mySubmit}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country" />
        <button>sadfasdf</button>
      </form>

      <div ref={eventOne}>Hi</div>
      <div onClick={click}>Click me</div>
      <input ref={eventTwo} placeholder="fdasfasf" />
      <input onChange={change} placeholder="fdasfasf" />
    </>
  );
}

export default DefaultRoute;

// /* Node Module */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';

// class DefaultRoute extends React.Component {
//   componentDidMount() {
//     ReactDOM.findDOMNode(this.refs.eventOne).addEventListener('mouseover', () => this.mouseEnter());
//   }

//   mouseEnter() {
//     console.log('mouse enter');
//   }

//   render() {
//     return (
//       <>
//         <Link to="/">Root</Link>
//         <div ref="eventOne">Hi</div>
//         <input placeholder="fdasfasf" />
//       </>
//     );
//   }
// }

// export default DefaultRoute;
