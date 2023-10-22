import React, { Component } from "react";
import Statistics from "components/Feedback/Statistics";
import FeedbackOptions from "components/Feedback/FeedbackOptions";
import Section from "components/Feedback/Section";
import Notification from "components/Feedback/Notification";
import css from 'components/Feedback/Feedback.module.css';



export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleIncrement = (feedbackType) => {
    this.setState({ [feedbackType]: this.state[feedbackType] + 1 });
  };

  countTotalFeedback = () => { 
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => { 
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    const positiveFeedbackPercentage = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(positiveFeedbackPercentage);
  };

  render() { 
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return (
      <div className={css.mainContainer}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  };
};
