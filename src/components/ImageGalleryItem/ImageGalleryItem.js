//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Modal from '../Modal/Modal';
//Styles
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
	static propTypes = {
		webFormat: PropTypes.string.isRequired,
		tags: PropTypes.string,
		largeImage: PropTypes.string.isRequired,
	};

	static defaultProps = {
		tags: 'photo from Pixabay',
	};

	state = {
		showModal: false,
	};

	toggleModal = () => {
		this.setState(prevState => {
			return { showModal: !prevState.showModal };
		});
	};

	render() {
		const { webFormat, tags, largeImage } = this.props;
		const { showModal } = this.state;

		return (
			<li className={styles.imageGalleryItem}>
				<img
					src={webFormat}
					alt={tags}
					className={styles.imageGalleryItemImage}
					onClick={this.toggleModal}
				/>
				{showModal && <Modal image={largeImage} alt={tags} onClose={this.toggleModal} />}
			</li>
		);
	}
}
