import React, { useState, useEffect } from "react";
// import "./displayStudent.css";

const DisplayTeacher = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
  }, []);
  
  return (
    <div>
      <h2>Teacher Display</h2>
    </div>
  );
};

export default DisplayTeacher;
