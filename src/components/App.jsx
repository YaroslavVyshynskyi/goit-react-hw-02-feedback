import React from "react";
import Section from "./Section/Section";
import FeedBackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import { Component } from "react";
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// };

// export const App = () => {
//   return (
//     <div>
//       <Section initialValue={10} title="Please leave feedback">
//       <FeedbackOptions options={ good, neutral, total} onLeaveFeedback={handleGoodFb, handleNeutralFb, handleBadFb} />
//       <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0}></Statistics>
//       </Section>
//     </div>
//   );
// };

class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleGoodFb = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,

            }
        })
    };

    handleNeutralFb = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    };

    handleBadFb = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        })
    };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0
    }
    const totalInPercentage = this.state.good / this.countTotalFeedback() * 100;
    return Math.round(totalInPercentage);
  };
  
  render() { 
    const options = Object.fromEntries(Object.entries(this.state).map(([key]) => [key,key]))
    const onLeaveFeedback = { handleGoodFb: this.handleGoodFb, handleNeutralFb: this.handleNeutralFb, handleBadFb: this.handleBadFb };
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback} />
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
        </Section>
      </div>
    );
  };
};

export default App;