import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/login";
import DisplayStudent from "./Pages/displayStudent";
import DisplayTeacher from "./Pages/displayTeacher";

function App() {


  // const Button = () => {
  //   var images = document.getElementsByTagName("img");
  //   console.log(images);
  //   axios
  //     .post(
  //       "https://django-server-production-7cd2.up.railway.app/displayTeacher/",
  //       {
  //         usernames: ["anas123"],
  //       }
  //     )
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <button type="button" onClick={Button}>Click Me!</button>
  //     </header>
  //   </div>
  // );

  return (
    <Router>
      <Routes>
        <Route path="/index.html" element={<Login></Login>} />
        <Route path="/displayStudent" element={<DisplayStudent></DisplayStudent>} />
        <Route path="/displayTeacher" element={<DisplayTeacher></DisplayTeacher>} />
      </Routes>
    </Router>
  );
}

export default App;
