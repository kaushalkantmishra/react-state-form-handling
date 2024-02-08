import { useState } from "react";
import "./CommentsForm.css";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
        username: "",
        remarks: "",
        rating: 5,
      }); 
  };

  return (
    <div className="comment-form">
      <h3>Give a Comment!</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="remarks">Remarks: </label>
        <textarea
          name="remarks"
          id="remarks"
          value={formData.remarks}
          placeholder="Add few remarks"
          onChange={handleInputChange}
        >
          Remarks
        </textarea>
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          placeholder="Rating"
          type="number"
          min={1}
          max={5}
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
