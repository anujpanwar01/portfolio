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
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = function (event) {
    if (!name || !email || !comment) {
      return;
    }
    setIsLoading(true);
    fetch("https://portfolio-f4722-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({
        ...userInput,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Your form Submission not submitted please try again."
          );
        }

        setThankyou(!thankyou);
        setIsLoading(false);
        return res;
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });

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
        {isLoading ? "Submitting..." : " Submit"}
      </CustomBtn>
    </FormContainer>
  );
}
export default ContactForm;
