import { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
// import Feedback from './Feedback/Feedback';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    let procentGood = 0;
    total === 0
      ? (procentGood = 0)
      : (procentGood = Math.round((this.state.good / total) * 100));
    return procentGood;
  };

  addFeedback = evt => {
    // console.log(evt);
    // console.log(evt.currentTarget);
    // console.log(evt.target);
    const { textContent } = evt.target;
    const key = textContent.toLowerCase();
    // console.log(key);
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const procentGoodFeedback = this.countPositiveFeedbackPercentage();

    // console.log(this.state);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#dbffff',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={procentGoodFeedback}
            />
          </Section>
        )}
      </div>
    );
  }
}

export { App };

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         backgroundColor: '#dbffff',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Feedback  />
//     </div>
//   );
// };
