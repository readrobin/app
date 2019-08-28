import React from 'react';
import ReactDom from 'react-dom';
import { Comp } from 'src/blah';

const App = () => {
  const helloWorld = 'Hello World';

  return (
    <>
      <h1>{helloWorld}</h1>
      <Comp />
    </>
  );
};

ReactDom.render(<App />, document.getElementById('index'));
