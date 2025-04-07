import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100) || 0;

  return (
    <div className="container">
      <h1>Sip Happens Café</h1>

      <Description title="Please leave your feedback about our service by selecting one of the options below." />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          feedbacks={feedbacks}
        />
      ) : (
        <Notification message="There is no feedback yet" />
      )}
    </div>
  );
};

export default App;
