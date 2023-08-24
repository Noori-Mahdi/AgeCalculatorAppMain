import { useRef } from "react";

type inputProps = {
  id: number;
  inputType: string;
  valid: boolean;
  onValuePrametr: (value: number, inputId: number) => void;
};

const Input = ({ id, inputType, onValuePrametr, valid }: inputProps) => {
  const setRef = useRef<HTMLInputElement>(null);

  let value = 0;
  const test = () => {
    value = Number(setRef.current?.value);
    onValuePrametr(value, id);
  };
  if (valid) {
    return (
      <div className="inputBx">
        <label className="d-block" htmlFor="">
          {inputType}
        </label>
        <input type="number" ref={setRef} onChange={test}></input>
      </div>
    );
  }else{
    return (
      <div className="inputBx inValid">
        <label className="d-block" htmlFor="">
          {inputType}
        </label>
        <input type="number" ref={setRef} onChange={test}></input>
        <span>must be a valid {inputType}</span>
      </div>
    );
  }
};

export default Input;
