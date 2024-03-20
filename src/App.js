import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contact, setContact] = useState([])
  const [appointment, setAppointment] = useState([])

  function handleContact(input) {
    setContact((prevContacts) => [...prevContacts, input])
  }

  function handleAppointment(input) {
    setAppointment((prevAppointment) => [...prevAppointment, input])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contact={contact} handleContact={handleContact}/> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointment={appointment} contact={contact} handleAppointment={handleAppointment}/> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
