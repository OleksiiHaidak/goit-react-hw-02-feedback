import css from 'components/Feedback/Feedback.module.css';
import React from "react";

const FeedbackOptions = ({onLeaveFeedback}) => (
  <div className={css.btnContainer}>
    <button className={css.btn} onClick={() => onLeaveFeedback("good")}>Good</button>
    <button className={css.btn} onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
    <button className={css.btn} onClick={() => onLeaveFeedback("bad")}>Bad</button>
  </div>
);

export default FeedbackOptions;