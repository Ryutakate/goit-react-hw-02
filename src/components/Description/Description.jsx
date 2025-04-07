import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ title }) => {
    return <p className={styles.text}>{title}</p>;
};

Description.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Description;
