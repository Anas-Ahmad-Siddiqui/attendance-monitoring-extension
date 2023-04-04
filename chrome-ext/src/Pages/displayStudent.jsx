import React, { useState, useEffect } from "react";
import "./displayStudent.css";
const DisplayStudent = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
    setClasses(localStorage.getItem("classes"));

  }, []);

  return (
    <div className="user-details-container">
      <h2>{first_name + " " + last_name}</h2>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <p>Classes: {classes}</p>
    </div>
  );
};
export default DisplayStudent;
