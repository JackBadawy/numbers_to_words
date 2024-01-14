import { useState } from "react";

import "./App.css";
import NumberToWord from "./components/NumberToWord";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NumberToWord />
    </>
  );
}

export default App;
