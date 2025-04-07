import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, total }) => {
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
            
            {total > 0 && (
                <button
                    className={styles.buttonReset}
                    onClick={resetFeedback}
                >
                    Reset
                </button>
            )}
        </div>
    );
};

Options.propTypes = {
    updateFeedback: PropTypes.func.isRequired,
    resetFeedback: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
};

export default Options;
