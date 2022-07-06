import React, {useState} from 'react';
import './App.css';

export const replaceCamelcaseWithSpaces = color => {
  return color.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const newBtnColor = btnColor === 'red' ? 'blue' : 'red';
  const [btnDisabled, setBtnDisabled] = useState(false);

  const  checkboxClickHandler = (e) => {
    setBtnDisabled(e.target.checked)
  
  }

  return (
      <div>
        <button disabled={btnDisabled} onClick={() => setBtnColor(newBtnColor)} style={{backgroundColor: `${btnDisabled ? 'grey' : btnColor}`, color: 'white'}} >Change to {newBtnColor}</button>
       <label htmlFor="DisableBtnCheckbox">
        <input id="DisableBtnCheckbox" label="Disable Button" checked={btnDisabled} aria-checked={btnDisabled} onChange={(e) => checkboxClickHandler(e)} type="checkbox" />
        Disable Button
       </label>
      </div>
  );
}

export default App;
