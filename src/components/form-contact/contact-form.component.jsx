import React, { useState, useContext } from "react";
import { FormContainer } from "./contact-form.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomBtn from "../custom-btn/custom-btn.component";
import { ThemeContext } from "../../context/theme.context";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  let navigate = useNavigate();

  const { currentTheme } = useContext(ThemeContext);

  const intialState = {
    name: "",
    number: "",
    comment: "",
    email: "",
  };
  //input fields
  const [userInput, setUserInput] = useState(intialState);

  // url encode for netlify
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const submitHandler = function (event) {
    event.preventDefault();

    // const userData = {
    //   comment: userInput.comment,
    //   email: userInput.email,
    // };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));

    //reset the input form value;
    setUserInput(intialState);
  };

  const inputChangeHandler = function (event) {
    const { name, value } = event.target;

    setUserInput(() => {
      return { ...userInput, [name]: value };
    });
  };

  const { name, email, comment, number } = userInput;
  return (
    <FormContainer
      name="contact"
      method="post"
      onSubmit={submitHandler}
      netlify
    >
      <CustomInput
        name="name"
        className="name"
        value={name}
        handleChange={inputChangeHandler}
        required
        type="text"
        placeholder="Full Name..."
      />

      <div>
        <CustomInput
          name="email"
          value={email}
          onChange={inputChangeHandler}
          required
          type="email"
          placeholder="abc@gmail.com"
        />
        <CustomInput
          name="number"
          width={"100%"}
          value={number}
          onChange={inputChangeHandler}
          required
          type="number"
          placeholder="Phone number..."
        />
      </div>
      <CustomInput
        element={"text-area"}
        value={comment}
        name="comment"
        handleChange={inputChangeHandler}
        placeholder="Write your message..."
      />
      <CustomBtn
        button
        className="btn"
        type="submit"
        currentTheme={currentTheme}
      >
        Submit
      </CustomBtn>
    </FormContainer>
  );
}
export default ContactForm;
