import React from "react";

export const ContactPicker = ({ contact, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">No Contact Selected</option>
      {contact.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};