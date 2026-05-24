import React, { useState } from 'react';

import "./Register.css";
import Header from '../Header/Header';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register_url = window.location.origin + "/djangoapp/register";

  const register = async (e) => {
    e.preventDefault();

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "userName": userName,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
      }),
    });

    const json = await res.json();
    if (json.status != null && json.status === "Authenticated") {
      sessionStorage.setItem('username', json.userName);
      window.location.href = "/";
    } else {
      alert(json.message || "The user could not be registered.");
    }
  };

  return (
    <div>
      <Header/>
      <form className="register_container" onSubmit={register}>
        <h1 className="header">Register</h1>
        <div className="inputs">
          <div className="input">
            <span className="input_field">Username</span>
            <input type="text" name="username" placeholder="Username" className="input_field" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
          </div>
          <div className="input">
            <span className="input_field">First Name</span>
            <input type="text" name="firstName" placeholder="First Name" className="input_field" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
          </div>
          <div className="input">
            <span className="input_field">Last Name</span>
            <input type="text" name="lastName" placeholder="Last Name" className="input_field" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
          </div>
          <div className="input">
            <span className="input_field">Email</span>
            <input type="email" name="email" placeholder="Email" className="input_field" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="input">
            <span className="input_field">Password</span>
            <input type="password" name="password" placeholder="Password" className="input_field" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
        </div>
        <div className="submit_panel">
          <input className="submit" type="submit" value="Register"/>
        </div>
      </form>
    </div>
  );
};

export default Register;
