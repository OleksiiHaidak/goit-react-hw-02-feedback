import css from 'components/Feedback/Feedback.module.css';
import React from "react";

const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <div className={css.btnContainer}>
    {options.map(option => (
      <button key={option} className={css.btn} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;