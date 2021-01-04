/* eslint no-eval: 0 */
import React, { useState } from 'react';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [stack, setStack] = useState("");

  const value = stack.length > 0 ? stack : "0";

  return (
    <main className='react-calculator'>
      <Result value={value} /> 
      <Numbers onClickNumber={number => setStack(`${stack}${number}`)} />
      <Functions 
        onContentClear={() => setStack("")}
        onDelete={() => {
          if (stack.length > 0){
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          } else {
            setStack("");
          }
        }}
      />
      <MathOperations 
        onClickOperation={operation => setStack(`${stack}${operation}`) }
        onClickEqual={() => setStack(eval(stack).toString()) }
      />
    </main>
  );
}

export default App;
