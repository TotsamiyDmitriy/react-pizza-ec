import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
