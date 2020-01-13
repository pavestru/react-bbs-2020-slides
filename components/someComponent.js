import React, {useState} from 'react';

export const SomeComponent = () => {
  const [clicked, setState] = useState(false);
  if (clicked) {
    return <button disabled="disabled">Already Clicked</button>
  } else {
    return <button onClick={() => setState(true)}>Click me!</button>
  }
}