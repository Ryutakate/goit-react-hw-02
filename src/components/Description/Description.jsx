import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ title }) => {
    return (
        <div>
            <h1 className={styles.heading}>Sip Happens Café</h1>
            <p className={styles.text}>{title}</p>
        </div>
    );
};

Description.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Description;
