import { useState } from 'react';
import './App.css'

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
    const handleInputChange2 = (event) => {
      setInputValue2(event.target.value);
    }
      const handleInputChange3 = (event) => {
        setInputValue3(event.target.value);
  };

  return (
    <div>
      <form>
        <label>Enter your name: </label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <p>You typed: {inputValue}</p>
<br />
        <label>Enter your age:    </label>
        <input type="text" value={inputValue2} onChange={handleInputChange2} />
        <p>You typed: {inputValue2}</p>

        <br />
        <label>Enter your address: </label>
        <input type="text" value={inputValue3} onChange={handleInputChange3} />
        <p>You typed: {inputValue3}</p>
      </form>
      
    </div>
  );
};

export default Form;