import React from 'react';

import './HelloWorld.scss';

const HelloWorld = (props) => {
  return (
    <div className="container-hello">
      {props.text}
    </div>
  );
};

export default HelloWorld;