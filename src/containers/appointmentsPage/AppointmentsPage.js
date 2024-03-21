import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointment, contact, handleAppointment }) => {
  const [title, setTitle] = useState('')
  const [contactInfo, setContactInfo] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAppointment({ title, contactInfo, date, time })
    setTitle('')
    setContactInfo('')
    setDate('')
    setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contact={contact}
        title={title}
        setTitle={setTitle}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contact={contact} appointment={appointment} />
      </section>
    </div>
  );
};