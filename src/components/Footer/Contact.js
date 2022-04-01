import React, { useState } from "react";

import "./contact.css";
function Contact() {
  //input fields
  const [userInput, setUserInput] = useState({
    comment: "",
    email: "",
  });

  //for comments fields
  // const comments = function (event) {
  //   setUserInput(() => {
  //     return { ...userInput, comment: event.target.value };
  //   });
  //   // setComment(event.target.value);
  // };
  // //for emails fields
  // const emails = function (event) {
  //   setUserInput(() => {
  //     return { ...userInput, email: event.target.value };
  //   });
  //   // setEmail(event.target.value);
  // };
  //submission
  const submitHandler = function (event) {
    event.preventDefault();

    const userData = {
      comment: userInput.comment,
      email: userInput.email,
    };
    console.log(userData);
    // ;
    setUserInput({ comment: "", email: "" });
  };

  const inputChangeHandler = function (event) {
    const { type, value } = event.target;

    setUserInput(() => {
      return { ...userInput, [type]: value };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="name"
        value={useState.comment}
        onChange={inputChangeHandler}
        required
        type="text"
        placeholder="Full Name..."
      />

      <div>
        <input
          value={useState.email}
          onChange={inputChangeHandler}
          required
          type="email"
          placeholder="abc@gmail.com"
        />
        <input
          width={"100%"}
          value={useState.email}
          onChange={inputChangeHandler}
          required
          type="number"
          placeholder="Phone number..."
        />
      </div>
      <textarea
        style={{ height: "10rem", resize: "none" }}
        placeholder="Write your message..."
      ></textarea>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
export default Contact;
