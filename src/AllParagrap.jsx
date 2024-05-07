import React, { useState } from "react";
import Data from "./data";

const AllParagrap = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    setText(Data.slice(0, amount));
  };

  console.log(number);
  return (
    <div>
      <h4> Lorem Ipsum Paragrap Generator</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label>select no of paragrap</label>
        <input
          type="number"
          name="number"
          min="0"
          max={Data.length}
          step="1"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <div className="lorem-text">
        <p> {text}</p>
      </div>
    </div>
  );
};

export default AllParagrap;
