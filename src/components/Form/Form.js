import "./Form.css";
import Modal from "../Modal";
import { useState } from "react";
import MyComponent from "../MyComponent";
import { loanInputContext } from "../../contexts/LoanFormInputContext";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Form() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  //USE CONTEXT
  const userData = useContext(UserContext);
  const initialName = userData.name;
  const initialEmail = userData.email;
  const [formInputs, setFormInput] = useState({
    name: initialName,
    email: initialEmail,
    phoneNumber: "",
    age: "",
    student: false,
    salary: "",
  });
  let btnClasses = "";

  let btnDisabled =
    formInputs.name == "" ||
    formInputs.age == "" ||
    formInputs.phoneNumber == "";

  btnDisabled ? (btnClasses = "disabled") : (btnClasses = "");
  console.log(userData);

  function handleFormCLick(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age } = formInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("the age is not allowed");
    } else if (
      formInputs.phoneNumber.length < 10 ||
      formInputs.phoneNumber.length > 12
    ) {
      setErrorMessage("Phone Number Format is Incorrect.");
    }
    setShowModal(true);
  }

  function handleDivCLick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  function handlePhoneNumberInputChange(value) {
    setFormInput({ ...formInputs, phoneNumber: value });
  }
  function handleAgeInputChange(value) {
    setFormInput({ ...formInputs, age: value });
  }
  function handleNameInputChange(value) {
    setFormInput({ ...formInputs, name: value });
  }
  function handleEmailInputChange(value) {
    setFormInput({ ...formInputs, email: value });
  }

  return (
    <div
      onClick={handleDivCLick}
      className="flex"
      style={{ backgroundColor: "#FCB045", padding: "2rem" }}
    >
      <h1 style={{ backgroundColor: "blue", color: "white" }}>
        Welcome Back Mr.{userData.name}!
      </h1>
      <form
        id="loan-form"
        className="flex"
        onSubmit={handleFormCLick}
        style={{ flexDirection: "column" }}
      >
        <loanInputContext.Provider
          value={{
            inputValue: formInputs.name,
            handleChange: handleNameInputChange,
            labelTitle: "NAME",
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>
        <loanInputContext.Provider
          value={{
            inputValue: formInputs.email,
            handleChange: handleEmailInputChange,
            labelTitle: "EMAIL",
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>
        <loanInputContext.Provider
          value={{
            inputValue: formInputs.phoneNumber,
            handleChange: handlePhoneNumberInputChange,
            labelTitle: "Phone Number",
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>
        <loanInputContext.Provider
          value={{
            inputValue: formInputs.age,
            handleChange: handleAgeInputChange,
            labelTitle: "AGE",
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>

        <label>Are you a student</label>
        <input
          type="checkbox"
          className="checkboxStyle"
          checked={formInputs.student}
          onChange={(event) => {
            setFormInput({ ...formInputs, student: event.target.checked });
          }}
        />

        {/* PROPS
        <label>Name</label>
        <input
          type="text"
          value={formInputs.name}
          onChange={(event) => {
            setFormInput({ ...formInputs, name: event.target.value });
          }}
        ></input>
        <label>Phone Number</label>
        <input
          type="phone"
          value={formInputs.phoneNumber}
          onChange={(event) => {
            setFormInput({ ...formInputs, phoneNumber: event.target.value });
          }}
        ></input>
        
        <label>Age</label>
        <input
          type="number"
          value={formInputs.age}
          onChange={(event) => {
            setFormInput({ ...formInputs, age: event.target.value });
          }}
        ></input>
        <label>Are you a student</label>
        <input
          type="checkbox"
          className="checkboxStyle"
          checked={formInputs.student}
          onChange={(event) => {
            setFormInput({ ...formInputs, student: event.target.checked });
          }}
        />*/}
        <label>salary</label>
        <select>
          <option value="" selected></option>
          <option>Less Than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>More than 2000$</option>
        </select>
        <button
          type="submit"
          id="submit-loan-btn"
          className={btnClasses}
          disabled={btnDisabled}
        >
          SUBMIT
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
