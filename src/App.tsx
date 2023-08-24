import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "./Components/Button";
import InputList from "./Components/InputList";
import TextList from "./Components/TextList";

function App() {
  const [state, setState] = useState([
    { id: 1, type: "year", count: -1, valid: true },
    { id: 2, type: "months", count: -1, valid: true },
    { id: 3, type: "day", count: -1, valid: true },
  ]);

  const time = new Date();

  const handleClikc = () => {
    const newState = [...state];
    if (year !== null) {
      newState[0].count = year;
      newState[0].valid = true;
    } else {
      newState[0].valid = false;
    }
    if (months !== null) {
      newState[1].count = months;
      newState[1].valid = true;
    } else {
      newState[1].valid = false;
    }
    if (day !== null) {
      newState[2].count = day;
      newState[2].valid = true;
    } else {
      newState[2].valid = false;
    }
    setState(newState);
  };

  let year: number | null = null;
  let months: number | null = null;
  let day: number | null = null;

  const valuePrametr = (value: number, inputId: number) => {
    if (inputId === 1) {
      year = time.getFullYear();
      if (value > 1900 && value <= year) year = year - value;
      else year = null;
    }
    if (inputId === 2) {
      if (value < 13 && value > 0) {
        months = time.getMonth() + 1;
        if (months <= value) months = value - months;
        if (months > value) months = 12 - months + value;
      } else {
        months = null;
      }
    }
    if (inputId === 3) {
      if (value <= 30 && value > 0) {
        day = time.getDate();
        if (day <= value) day = value - day;
        if (day > value) day = 30 - day + value;
      } else {
        day = null;
      }
    }
  };

  return (
    <>
      <InputList state={state} onValuePrametr={valuePrametr} />
      <Button onClikc={handleClikc} />
      <TextList state={state} onValuePrametr={valuePrametr} />
    </>
  );
}

export default App;
