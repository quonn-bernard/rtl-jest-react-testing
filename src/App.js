import React, {useState} from 'react';
import './App.css';

function App() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [btnText, setBtnText] = useState('blue');


  const btnClickHandler = () => {
    setBtnClicked(!btnClicked)
    setBtnText('red')
  }
  return (
      <div>
        <button onClick={btnClickHandler} style={{backgroundColor: `${btnClicked ? 'blue' : 'red'}`}}>Changed to {btnText}</button>
      </div>
  );
}

export default App;
