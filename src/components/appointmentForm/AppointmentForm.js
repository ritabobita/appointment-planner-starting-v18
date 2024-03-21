import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({contact, title, setTitle, contactInfo, setContactInfo, date, setDate, time, setTime, handleSubmit}) => {

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  };
   const handleContactInfoChange = (e) => {
     setContactInfo(e.target.value)
   };
  const handleDateChange = (e) => {
    setDate(e.target.value)
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='title' value={title} onChange={handleTitleChange}></input>
        <input type='date' value={date} onChange={handleDateChange} min={getTodayString}></input>
        <input type='time' value={time} onChange={handleTimeChange}></input>
        <ContactPicker contact={contact} value={contactInfo} onChange={handleContactInfoChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
