import numberToWords from "../numberToWords";
import { useEffect, useState } from "react";

const NumberToWord = () => {
  const [stringToDisplay, setStringToDisplay] = useState("");
  const [number, setNumber] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleFromSubmit = (e) => {
    console.log("form submitted");

    /* setNumber(inputValue);
    setStringToDisplay(numberToWords(number)); */

    // This callback ensures that setNumber is completed before updating stringToDisplay
    setNumber(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setStringToDisplay(numberToWords(number));
  });

  return (
    <div>
      <input type="number" onChange={handleInputChange} />
      <button onClick={handleFromSubmit}>Convert</button>
      <p>{stringToDisplay && stringToDisplay}</p>
    </div>
  );
};

export default NumberToWord;
