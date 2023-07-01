import React, { useState } from "react";
import "./ComingSoon.css";
import logo from "./logo.jpeg";
import Countdown from "react-countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ComingSoon = () => {
  const [email, setEmail] = useState("");

  // Gestionnaire pour soumettre l'adresse e-mail
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer l'adresse e-mail quelque part (par exemple, à votre backend) ici
    console.log("E-mail submitted:", email);
  };

  // Gestionnaire pour mettre à jour l'adresse e-mail lorsqu'elle est modifiée dans le formulaire
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Compte à rebours jusqu'à la date spécifiée (ici, 1er janvier 2024)
  const countdownDate = new Date("2023-11-01T00:00:00").getTime();

  // Fonction pour formater le compte à rebours
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

      {<h1 className="coming">We Coming Soon !</h1>}

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
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
