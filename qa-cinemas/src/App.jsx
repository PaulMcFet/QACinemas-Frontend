import "./App.css";
import Logo from "./Assets/qa-logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="true">
        <Navbar.Brand>
          <img
            src={Logo}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="QA Cinemas Logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
