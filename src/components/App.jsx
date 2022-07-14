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
  
  render() { 
    return (<div>
      <Section title="Please leave feedback">
        <FeedBackOptions
          // options={this.state[good], this.state[neutral], this.state[bad]}
          onLeaveFeedback={this.handleGoodFb, this.handleNeutralFb, this.handleBadFb} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={0} positivePercentage={0}></Statistics>
      </Section>
    </div>
    );
  };
};

export default App;