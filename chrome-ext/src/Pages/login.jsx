import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    console.log(typeof(localStorage.getItem("isTeacher")))
    if (localStorage.getItem("isTeacher") != null) {
      if (localStorage.getItem("isTeacher") === "true") {
        navigate("/displayTeacher");
      } else if (localStorage.getItem("isTeacher") === "false") {
        navigate("/displayStudent");
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isLogin) {
      var login_data = {
        username: username,
        password: password,
      };

      if (!isTeacher) {
        // https://django-server-production-7cd2.up.railway.app/loginStudent/

        axios
          .post(
            "https://django-server-production-7cd2.up.railway.app/loginStudent/",
            login_data
          )
          .then((response) => {
            if (response.data.hasOwnProperty("logCode")) {
              console.log(response.data);
              localStorage.setItem("username", username);
              localStorage.setItem("studentId", response.data.id);
              localStorage.setItem("logCode", response.data.logCode);
              localStorage.setItem("firstName", response.data.firstName);
              localStorage.setItem("lastName", response.data.lastName);
              localStorage.setItem("email", response.data.email);
              localStorage.setItem("classes", response.data.classes);
              localStorage.setItem("isTeacher", false);

              navigate("/displayStudent");
            } else {
              alert("Incorrect username or password");
            }
          });
      } else {
        // https://django-server-production-7cd2.up.railway.app/loginTeacher/

        axios
          .post(
            "https://django-server-production-7cd2.up.railway.app/loginTeacher/",
            login_data
          )
          .then((response) => {
        
            if (response.data.hasOwnProperty("logCode")) {
              console.log(response.data);
              localStorage.setItem("username", username);
              localStorage.setItem("teacherId", response.data.id);
              localStorage.setItem("logCode", response.data.logCode);
              localStorage.setItem("firstName", response.data.firstName);
              localStorage.setItem("lastName", response.data.lastName);
              localStorage.setItem("email", response.data.email);
              localStorage.setItem("classes", response.data.classes);
              localStorage.setItem("isTeacher", true);

              navigate("/displayTeacher");
            } else {
              alert("Incorrect username or password");
            }
          });
      }
    } else {
      var data = {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
      };
      if (!isTeacher) {
        // https://django-server-production-7cd2.up.railway.app/signupStudent/

        axios
          .post(
            "https://django-server-production-7cd2.up.railway.app/signupStudent/",
            data
          )
          .then((response) => {
            console.log(response.data);
            if (response.data.hasOwnProperty("id")) {
              axios
                .post(
                  "https://django-server-production-7cd2.up.railway.app/loginStudent/",
                  data
                )
                .then((response) => {
                  console.log(response.data);
                  if (response.data.hasOwnProperty("logCode")) {
                    console.log(response.data);
                    localStorage.setItem("username", username);
                    localStorage.setItem("studentId", response.data.id);
                    localStorage.setItem("logCode", response.data.logCode);
                    localStorage.setItem("firstName", first_name);
                    localStorage.setItem("lastName", last_name);
                    localStorage.setItem("email", email);
                    localStorage.setItem("isTeacher", false);
                    localStorage.setItem("classes", response.data.classes);

                    navigate("/displayStudent");
                  } else {
                    alert("Incorrect username or password");
                  }
                });
            } else {
              alert("Username already exists");
            }
          });
      } else {
        // https://django-server-production-7cd2.up.railway.app/signupTeacher/

        axios
          .post(
            "https://django-server-production-7cd2.up.railway.app/signupTeacher/",
            data
          )
          .then((response) => {
            console.log(response.data);

            if (response.data.hasOwnProperty("id")) {
              axios
                .post(
                  "https://django-server-production-7cd2.up.railway.app/loginTeacher/",
                  data
                )
                .then((response) => {
                  console.log(response.data);
                  if (response.data.hasOwnProperty("logCode")) {
                    console.log(response.data);
                    localStorage.setItem("username", username);
                    localStorage.setItem("teacherId", response.data.id);
                    localStorage.setItem("logCode", response.data.logCode);
                    localStorage.setItem("firstName", first_name);
                    localStorage.setItem("lastName", last_name);
                    localStorage.setItem("email", email);
                    localStorage.setItem("isTeacher", true);
                    localStorage.setItem("classes", response.data.classes);
                    navigate("/displayTeacher");
                  } else {
                    alert("Incorrect username or password");
                  }
                });
            } else {
              alert("Username already exists");
            }
          });
      }
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 style={{ marginTop: "40%" }}>{isLogin ? "Login" : "Sign up"}</h1>
        {!isLogin && (
          <div>
            <div className="form-input">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="first_name"
                value={first_name}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                id="last_name"
                value={last_name}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>
        )}
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        {/* {!isLogin && ( */}
        <div style={{ display: "flex" }}>
          <input
            id="isTeacher"
            type="checkbox"
            onChange={(event) => {
              setIsTeacher(!isTeacher);
            }}
          />
          <label for="isTeacher">Are you a Teacher?</label>
        </div>
        {/* )} */}
        <button type="submit">{isLogin ? "Login" : "Sign up"}</button>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}
export default Login;
