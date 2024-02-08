import { useState } from "react";
import "./CommentsForm.css";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };


  return (
    <div className="comment-form">
        <h3>Your details</h3>
        <hr />
      <form  action="" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name: </label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleInputChange}
          id="fullName"
          name="fullName"
        />{" "}
        <br />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Enter user name"
          value={formData.userName}
          onChange={handleInputChange}
          id="username"
          name="userName"
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          id="password"
          name="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
