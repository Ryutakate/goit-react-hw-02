import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ totalFeedback, positiveFeedback, feedbacks }) => {
    return (
        <div className={styles.feedback}>
            <p>Good: {feedbacks.good}</p>
            <p>Neutral: {feedbacks.neutral}</p>
            <p>Bad: {feedbacks.bad}</p>
            <p>Total feedbacks: {totalFeedback}</p>
            <p>Positive feedbacks: {positiveFeedback}%</p>
        </div>
    );
};

Feedback.propTypes = {
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
    feedbacks: PropTypes.object.isRequired,
};

export default Feedback;
