import React, { useState, useContext } from "react";
import { FormContainer } from "./contact-form.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomBtn from "../custom-btn/custom-btn.component";
import { ThemeContext } from "../../context/theme.context";

import { ThankYouContext } from "../../context/thankyou.context";
function ContactForm() {
  const { currentTheme } = useContext(ThemeContext);
  const { thankyou, setThankyou } = useContext(ThankYouContext);

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
    // const userData = {
    //   comment: userInput.comment,
    //   email: userInput.email,
    // };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...userInput,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Your form Submission not submitted please try again."
          );
        }
        console.log(res);
        setThankyou(!thankyou);
        return res;
      })
      .catch((error) => alert(error));

    event.preventDefault();
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
    <FormContainer onSubmit={submitHandler}>
      {/* <ThankYou /> */}
      {/* for netlify bot */}
      <CustomInput
        type="hidden"
        className="footer-form"
        value="contact"
        name="form-name"
      />

      <CustomInput
        name="name"
        className="name footer-form"
        value={name}
        handleChange={inputChangeHandler}
        required
        type="text"
        placeholder="Full Name..."
      />

      <div>
        <CustomInput
          name="email"
          className="footer-form"
          value={email}
          onChange={inputChangeHandler}
          required
          type="email"
          placeholder="abc@gmail.com"
        />
        <CustomInput
          name="number"
          className="footer-form"
          width={"100%"}
          value={number}
          onChange={inputChangeHandler}
          // required
          type="number"
          placeholder="Phone number (optional) .... "
        />
      </div>
      <CustomInput
        element={"text-area"}
        className="footer-form"
        value={comment}
        name="comment"
        handleChange={inputChangeHandler}
        placeholder="Write your message..."
      />
      <CustomBtn
        button
        className="btn footer-contact"
        type="submit"
        currenttheme={currentTheme}
      >
        Submit
      </CustomBtn>
    </FormContainer>
  );
}
export default ContactForm;
