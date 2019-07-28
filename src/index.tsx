import React from 'react';
import ReactDom from 'react-dom';
import { Comp } from 'src/blah';

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Comp />
    </>
  );
};

ReactDom.render(<App />, document.getElementById('index'));
