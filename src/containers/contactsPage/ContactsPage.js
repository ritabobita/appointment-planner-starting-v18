import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contact, handleContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  //form onSubmit=handleSubmit 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.find(data => data.name === name)) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
      //passes info to handleContact upwards to app.js into an array
      handleContact({ name, phone, email });
      //this clears the form
      setName('');
      setPhone('');
      setEmail('');
    }
  };

//re-render to false
  useEffect(() => {
    setIsDuplicate(false); 
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contact={contact} />
      </section>
    </div>
  );
};
