
import About from "./component/about/About";
import Home from "./component/pages/Home";
import Privacy from "./component/privacy/Privacy";
import Login from "./auth/Login";
import Signup from './auth/Signup'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
      <>
     
<Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
