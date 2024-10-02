import React from "react";
import { useContext } from "react";

import { ContactsContext } from "../contexts/Contacts";

function Contact() {
  const [contacts] = useContext(ContactsContext);
  return (
    <div >
      <h1>Це контактна сторінка</h1>
      <div className="contactInfo">
        <p>{`Ел.адреса: ${contacts.mail}`}</p>
        <p>{`Телефон: ${contacts.tel}`}</p>
        <p>{`Адреса: ${contacts.address}`}</p>
      </div>
    </div>
  );
}

export default Contact;
