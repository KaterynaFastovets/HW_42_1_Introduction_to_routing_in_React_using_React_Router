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

function App() {
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
