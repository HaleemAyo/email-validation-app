/* eslint-disable react/prop-types */
import desktopImage from "../assets/images/desktopImage.svg";
import mobileImage from "../assets/images/mobileImage.svg";
import icon from "../assets/images/icon.svg";
import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Product discovery and building what matters",
  },
  {
    id: 2,
    name: "Measuring to ensure updates are a success",
  },
  {
    id: 3,
    name: "And much more!",
  },
];

//Prevent the form from loading fast, Validate the email, read the content of the input(controlled elements using states), the button should go to the message component

const Form = ({ setEmail,email }) => {
  const [isValidEmail, setIsValidEmail] = useState(false); // To conditionally render the components
  const [showErrorMessage, setShowErrorMessage] = useState(false); // New state

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setIsValidEmail(false); //Setting the value back to the default
  }

  function handleFormSubmit(e) {
    e.preventDefault(); //Prevent the default of the form

    // Perform email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //RegEx
    const isValid = emailPattern.test(email);
    setIsValidEmail(isValid);
    if (!isValid) {
      setShowErrorMessage(true); // Show error message if email is invalid
    } else {
      setEmail(email); // Lift the email state to App
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
          {/* Conditionally render either a Link or a disabled button */}
          {isValidEmail ? (
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button
                text="Subscribe to monthly newsletter"
                onClick={() => setShowErrorMessage(true)} // Show error message on button click
              />
            </Link>
          ) : (
            <Button
              text="Subscribe to monthly newsletter"
              disabled={showErrorMessage && !isValidEmail}
              onClick={() => setShowErrorMessage(true)}
            />
          )}
        </form>
      </div>
      <div>
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileImage} />
          <source media="(min-width: 769px)" srcSet={desktopImage} />
          <img src="fallback-image.jpg" alt="Fallback Image" />
        </picture>
      </div>
    </div>
  );
};

export default Form;
