import React, { useState } from "react";
import { FormContainer } from "./contact-form.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomBtn from "../custom-btn/custom-btn.component";
function ContactForm() {
  const intialState = {
    name: "",
    number: "",
    comment: "",
    email: "",
  };
  //input fields
  const [userInput, setUserInput] = useState(intialState);

  const submitHandler = function (event) {
    event.preventDefault();

    // const userData = {
    //   comment: userInput.comment,
    //   email: userInput.email,
    // };

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
      <CustomBtn className="btn" type="submit">
        Submit
      </CustomBtn>
    </FormContainer>
  );
}
export default ContactForm;
