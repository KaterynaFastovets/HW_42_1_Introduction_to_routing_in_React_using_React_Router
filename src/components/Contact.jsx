import React, {} from "react";
import { ContactsInfo } from "../App";




function Contact() {
  const contactsData = React.useContext (ContactsInfo);
  return (
    <div className="child" >
      <h1>Це контактна сторінка</h1>
      <div className="contactInfo">
      <p>{`Ел.адреса: ${contactsData.mail}`}</p>
        <p>{`Телефон: ${contactsData.tel}`}</p>
        <p>{`Адреса: ${contactsData.address}`}</p>
      </div>
    </div>
  );
}

export default Contact;
