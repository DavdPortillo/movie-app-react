import { useState } from 'react';

export const Input = ({outInputValue}) => {

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    outInputValue(inputValue)
    setInputValue("");
   
  };


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="The Matrix, Guardians Of The Galaxy, Interstellar..."
      />
    </form>
  );
};