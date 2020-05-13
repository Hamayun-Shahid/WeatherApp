import React from "react";
import "./InputHandler.css";
// its for input handler and for search button

const InputHandler = ({ onSelectButtonClick, city, setCity }) => {
  // for onButton Click or on Submit Event

  const onSubmitButton = (e) => {
    e.preventDefault();
    onSelectButtonClick();
  };
  return (
    <div className="InputHandlerMain">
      <h1>Välj stad...</h1>
      <div className="InputHandlerSecondary">
        <form onSubmit={onSubmitButton}>
          <input
            placeholder=""
            // value={city}
            onSubmit={onSelectButtonClick}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Sök</button>
        </form>
      </div>
    </div>
  );
};

export default InputHandler;
