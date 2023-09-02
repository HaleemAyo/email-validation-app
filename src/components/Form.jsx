/* eslint-disable react/prop-types */
import desktopImage from "../assets/images/desktopImage.svg";
import mobileImage from "../assets/images/mobileImage.svg";
import icon from "../assets/images/icon.svg";
import { data } from "../data";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Form = ({ setEmail, email }) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false); // State that'll know if the user enters a wrong email format
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setIsValidEmail(false); //Setting the value back to the default
  }

  function handleFormSubmit(e) {
    e.preventDefault(); //Prevent the default of the form

    // Perform email validation using RegEx
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //RegEx
    const isValid = emailPattern.test(email);
    setIsValidEmail(isValid);
    if (!isValid) {
      setShowErrorMessage(true); // Show error message if email is invalid
    } else {
      setEmail(email);
      navigate("/message"); // Navigate to "/message" route
    }
  }

return (
    <div className="wrapper">
      <div className="wordings">
        <h1>Stay updated!</h1>
        <p>Join 60,000 product managers receiving monthly updates on</p>
        {data.map((d) => (
          <div className="icon" key={data.id}>
            <img src={icon} />
            <p>{d.name}</p>
          </div>
        ))}
        <form className="mail" onSubmit={handleFormSubmit}>
          <div>
            <label>Email address</label>
            {showErrorMessage && !isValidEmail && (
              <p style={{ color: "hsl(4, 100%, 67%)" }}>Invalid email</p>
            )}
          </div>
          <input
            type="email"
            placeholder="email@company.com"
            value={email}
            onChange={handleEmailChange}
            className={showErrorMessage && !isValidEmail ? "error" : ""}
          />

          <Button>Subscribe to monthly newsletter</Button>
        </form>
      </div>
      <div>
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileImage} />
          <source media="(min-width: 769px)" srcSet={desktopImage} />
          <img src={desktopImage} alt="Wallpaper" />
        </picture>
      </div>
    </div>
  );
};

export default Form;
