import React from "react";
import { Link } from "react-router-dom";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.contentContainer}>
      <p>Hello there!</p>
      <p>sgpropguide is your go-to page for real estate info in Singapore.</p>
      <Link to="/Rental" className={styles.link}>
        Guides on Rental
      </Link>
    </div>
  );
};

export default LandingPage;
