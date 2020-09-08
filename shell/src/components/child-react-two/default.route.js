/* Node Module */
import React, { useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const DefaultRoute = () => {
  useEffect(() => {
    // ReactDOM.findDOMNode(eventOne.current).addEventListener('mouseover', () => mouseEnter());
  }, []);

  // const eventOne = useRef();
  const eventTwo = useRef();

  const mouseEnter = () => {
    alert('mouse enter');
  }

  const change = () => {
    alert('on change');
  }

  const blur = () => {
    alert('blur');
  }

  const click = (e) => {
    console.log('e', e);
    e.preventDefault();
    alert('click');
  }

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
        <p><Link to="/child-react-two/testing">Child React 2 - child page</Link></p>
      </div>

      <form onSubmit={mySubmit}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country" />
        <button>sadfasdf</button>
      </form>

      {/* <div ref={eventOne}>Hi</div> */}
      <input ref={eventTwo} onBlur={blur} placeholder="nice" />
      <input onChange={change} placeholder="yoooo" />

      <div style={{ marginTop: 30 }} onClick={click}>Click me</div>
    </>
  );
}

export default DefaultRoute;