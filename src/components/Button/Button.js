//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Button.module.css';

const Button = ({ label, onLoad }) => (
	<button type="submit" className={styles.button} onClick={onLoad}>
		{label}
	</button>
);

Button.defaultProps = {
	label: 'Search',
};

Button.propTypes = {
	label: PropTypes.string,
	onLoad: PropTypes.func.isRequired,
};

export default Button;
