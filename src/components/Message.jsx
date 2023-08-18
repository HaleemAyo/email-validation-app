/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import icon from "../assets/images/icon.svg";
import Button from "./Button";

function Message({email}) {
  return (
    <div className="message-wrapper">
      <img src={icon} className="message-icon" />

      <h1>Thanks for subscribing!</h1>

      <p>
        A confirmation email has been sent to
        <span style={{ fontWeight: "700" }}> {email}</span>. Please open
        it and click the button inside to confirm your subcription.
      </p>
      <Link to="/">

      <Button text="Dismiss message."/>
      </Link>
    </div>
  );
}

export default Message;
