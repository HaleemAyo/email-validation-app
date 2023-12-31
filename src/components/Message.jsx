/* eslint-disable react/prop-types */
import icon from "../assets/images/icon.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Message({ email }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="message-wrapper">
      <img src={icon} className="message-icon" />

      <h1>Thanks for subscribing!</h1>

      <p>
        A confirmation email has been sent to
        <span style={{ fontWeight: "700" }}> {email}</span>. Please open it and
        click the button inside to confirm your subcription.
      </p>
      <Button onClick={handleClick}>Dismiss Message</Button>
    </div>
  );
}

export default Message;
