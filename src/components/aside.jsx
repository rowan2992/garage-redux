import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('/assets/images/mechanic.jpg')"}}></div>
      <img className="logo" src="/assets/images/logo.svg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>This garage has all kinds of cars.</p>
      {props.children}
    </div>
  );
}

export default Aside;