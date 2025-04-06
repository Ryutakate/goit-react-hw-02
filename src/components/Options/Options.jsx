import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ feedbacks, updateFeedback }) => {
    return (
        <div className={styles.buttons}>
            <button
                className={styles.button1}
                onClick={() => updateFeedback('good')}
            >
                Good
            </button>
            <button
                className={styles.button2}
                onClick={() => updateFeedback('neutral')}
            >
                Neutral
            </button>
            <button
                className={styles.button3}
                onClick={() => updateFeedback('bad')}
            >
                Bad
            </button>
        </div>
    );
};

Options.propTypes = {
    feedbacks: PropTypes.object.isRequired,
    updateFeedback: PropTypes.func.isRequired,
};

export default Options;
