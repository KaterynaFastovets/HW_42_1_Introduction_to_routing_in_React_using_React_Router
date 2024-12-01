import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import React, { useState } from "react";

export const ContactsInfo = React.createContext({});

function App() {
  const [contacts] = useState({
    mail: "dddddd@gmail.com",
    tel: "(044)111-11-11",
    address: "м. Київ, вулиця Олександра Кошиця, 5",
  });
  return (
    <div className="div">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/ " exact activeClassName="active">
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <ContactsInfo.Provider value={contacts}>
                <Home />
                <About/>
              </ContactsInfo.Provider>
            }
          />
          <Route
            path="/about"
            element={
              <ContactsInfo.Provider value={contacts}>
                <About />
              </ContactsInfo.Provider>
            }
          />

          <Route
            path="/contact"
            element={
              <ContactsInfo.Provider value={contacts}>
                <Contact />
              </ContactsInfo.Provider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
