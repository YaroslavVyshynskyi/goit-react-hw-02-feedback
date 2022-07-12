import Section from "./Section/Section";
import FeedBackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// };

export const App = () => {
  return (
    <div>
      <Section initialValue={10} title="Please leave feedback">
      <FeedbackOptions options={ good, neutral, total} onLeaveFeedback={handleGoodFb, handleNeutralFb, handleBadFb} />
      <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0}></Statistics>
      </Section>
    </div>
  );
};
