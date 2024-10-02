import React, { createContext, useState } from "react";
import Contact from "../components/Contact";
export const ContactsContext = createContext();

function Contacts() {
  const contacts = useState({
    mail: "dddddd@gmail.com",
    tel: "(044)111-11-11",
    address: "м. Київ, вулиця Олександра Кошиця, 5",
  });
  return (
    <ContactsContext.Provider value={contacts}>
       <Contact/>
    </ContactsContext.Provider>
  );
}

export default Contacts;
