import { useContext } from "react";
import { loanInputContext } from "../contexts/LoanFormInputContext";
export default function MyInput() {
  const InputContext = useContext(loanInputContext);
  console.log("The context from MyInput.js is");
  console.log(InputContext);
  return (
    <>
      <label>{InputContext.labelTitle}</label>
      <input
        value={InputContext.inputValue}
        onChange={(event) => {
          InputContext.handleChange(event.target.value);
        }}
      />
    </>
  );
}
