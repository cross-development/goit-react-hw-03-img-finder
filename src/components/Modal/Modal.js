//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Modal.module.css';

export default class Modal extends Component {
	static propTypes = {
		alt: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	};

	componentDidMount() {
		window.addEventListener('keydown', this.handleCloseModal);
		window.addEventListener('click', this.handleCloseModal);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleCloseModal);
		window.removeEventListener('click', this.handleCloseModal);
	}

	handleCloseModal = ({ code, target }) => {
		if (code === 'Escape' || target.nodeName === 'DIV') {
			this.props.onClose();
		}
	};

	render() {
		const { image, alt } = this.props;

		return (
			<div className={styles.overlay}>
				<div className={styles.modal}>
					<img src={image} alt={alt} />
				</div>
			</div>
		);
	}
}
