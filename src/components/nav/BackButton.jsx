import React, { useState } from "react";
import styles from "./BackButton.module.css";
import { setTimeout } from "timers";
import { withRouter } from "react-router-dom";

const BackButton = props => {
  const [animateOnClick, setAnimateOnClick] = useState(false);
  const animateClickHandler = () => {
    setAnimateOnClick(true);
    props.history.goBack();
    setTimeout(() => {
      setAnimateOnClick(false);
    }, 300);
  };
  return (
    <div className={styles.backButton} onClick={animateClickHandler}>
      <div
        className={
          animateOnClick
            ? `${styles.arrowWrap} ${styles.arrowWrapBack}`
            : styles.arrowWrap
        }
      >
        <span className={styles.arrowPart1} />
        <span className={styles.arrowPart2} />
        <span className={styles.arrowPart3} />
      </div>
    </div>
  );
};

export default withRouter(BackButton);
