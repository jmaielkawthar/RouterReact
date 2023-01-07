import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Details from "./Components/Details";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = useState([
    {
      id:Math.random(),pic:"https://m.media-amazon.com/images/I/71RRQ4wVeBL._SL1500_.jpg",
      name:"body lotion",
      prix:"20",
    },
    {
      id:Math.random(),pic:"https://www.fabellashop.ci/wp-content/uploads/2017/12/YVES-ROCHER-Comme-Une-Evidence-LEau-de-Parfum-new.jpg",
      name:"parfum evidence",
      prix:"110",
    },
    {
      id:Math.random(),pic:"https://m.media-amazon.com/images/I/51-QN-YXMTL.jpg",
      name:"creme visage",
      prix:"50",
    },
  ])
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home list={data} />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/details/:id"  element={<Details list={data}/>}/>


        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
