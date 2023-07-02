import React, { useState } from "react";
import "./ComingSoon.css";
import logo from "./logo.jpeg";
import Countdown from "react-countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { db } from "./firebaseConfig";

import { collection, addDoc } from "firebase/firestore";

const ComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailsCollection = collection(db, "emails");
      // verifier que l'email est valide avant de l'ajouter à la collection "emails"
      if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return;
      }

      // Add the email to the "emails" collection
      await addDoc(emailsCollection, { email });
      console.log("E-mail submitted:", email);
      //  Add a toast message to confirm the email was submitted
      alert("Thank you for subscribing!");

      // Clear the input field after the email is submitted
      setEmail("");
    } catch (error) {
      console.error("Error adding email:", error);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    // verify that the email is valid
    if (e.target.value.includes("@")) {
      console.log("valid email");
    } else {
      console.log("invalid email");
    }
  };

  const countdownDate = new Date("2023-11-01T00:00:00").getTime();

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span className="countdown">
        {days}d {hours}h {minutes}m {seconds}s
      </span>
    );
  };

  return (
    <div className="coming-soon">
      <img className="logo" src={logo} alt="logo" />

      <h1 className="coming">We're Coming Soon!</h1>

      <br />
      <br />
      <br />
      <br />

      <div className="countdown-container">
        <Countdown date={countdownDate} renderer={renderer} />
      </div>
      <div className="email-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit">Get Notified</button>
        </form>
      </div>
      <br />
      <br />
      <div>
        <div className="icons-container">
          <a
            href="https://www.instagram.com/madamekartisanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a
            href="https://www.instagram.com/madamekartisanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a
            href="https://www.instagram.com/madamekartisanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://www.instagram.com/madamekartisanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
