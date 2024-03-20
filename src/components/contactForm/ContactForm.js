import React from "react";

export const ContactForm = ({name, setName, phone, setPhone, email, setEmail, handleSubmit}) => {
  const handleNameChange = (e) => {
    setName(e.target.value)
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={handleNameChange}></input>
      <input type='tel' value={phone} onChange={handlePhoneChange} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" ></input>
      <input type='email' value={email} onChange={handleEmailChange}></input>
      <button type='submit'>Submit</button>
    </form>
    </>
  );
};

