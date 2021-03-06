//Core
import React from 'react';
import PropTypes from 'prop-types';
//Style
import style from './Notification.module.css';

const Notification = ({ message }) => (
	<div className={style.errorWrapper}>
		<p>`Woops, something went wrong ${message}`</p>
	</div>
);

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;
