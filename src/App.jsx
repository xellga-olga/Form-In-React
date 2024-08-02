import { useState } from "react";
import "./App.css";

function App() {

  const [value, setValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    contact: '',
    subject: '',
    resume: '',
    url: '',
    about: '',
  })

  const handleChanges = (e) => {
    setValue ({ ...value, [e.target.name] : [e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <div className="container">
      <h1>Form In React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input required type="text" placeholder="Enter First Name" name="firstname" 
        onChange={(e) => handleChanges(e)} />

        <label htmlFor="lastname">Last Name</label>
        <input required type="text" placeholder="Enter Last Name" name="lastname"  onChange={(e) => handleChanges(e)} />

        <label htmlFor="email">Email</label>
        <input required type="email" placeholder="Enter Email" name="email"  onChange={(e) => handleChanges(e)} />

        <label htmlFor="contact">Contact</label>
        <input type="text" placeholder="Enter Phone #" name="contact"  onChange={(e) => handleChanges(e)} />

        <label htmlFor="gender">Gender</label>
        <div className="gender-options">
          <input type="radio" name="gender" id="male"  onChange={(e) => handleChanges(e)}/>
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female"  onChange={(e) => handleChanges(e)}/>
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" id="other"  onChange={(e) => handleChanges(e)}/>
          <label htmlFor="other">Other</label>
        </div>

        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject">
          <option value='math'>React</option>
          <option value='Physic'>Next</option>
          <option value='English'>JS</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input onChange={(e) => handleChanges(e)} type="file" placeholder="Select Resume" name="resume" />

        <label htmlFor="url">URL</label>
        <input onChange={(e) => handleChanges(e)} type="text" name="url" placeholder="Enter Image Url" />

        <label htmlFor="about">About</label>
        <textarea onChange={(e) => handleChanges(e)} name="about" id="about" cols='30' rows='5' placeholder="Enter description"></textarea>

        <div className="button-group">
          <button className="button-reset" type="button">Reset</button>
          <button className="button-submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
