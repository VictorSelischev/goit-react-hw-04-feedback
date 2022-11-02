import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const addFeedback = evt => {
    const { textContent } = evt.target;

    switch (textContent.toLowerCase()) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = totalFeedback;
    let procentGood = 0;
    total === 0
      ? (procentGood = 0)
      : (procentGood = Math.round((good / total) * 100));
    return procentGood;
  };

  const procentGoodFeedback = countPositiveFeedbackPercentage();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#dbffff',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
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
};
