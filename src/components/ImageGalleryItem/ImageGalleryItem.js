//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Modal from '../Modal';
//Styles
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
	static propTypes = {
		tags: PropTypes.string,
		webFormat: PropTypes.string.isRequired,
		largeImage: PropTypes.string.isRequired,
	};

	static defaultProps = {
		tags: 'Photo from Pixabay',
	};

	state = {
		showModal: false,
	};

	toggleModal = () => this.setState(prevState => ({ showModal: !prevState.showModal }));

	render() {
		const { webFormat, tags, largeImage } = this.props;
		const { showModal } = this.state;

		return (
			<li className={styles.item}>
				<img src={webFormat} alt={tags} className={styles.itemImage} onClick={this.toggleModal} />
				{showModal && <Modal image={largeImage} alt={tags} onClose={this.toggleModal} />}
			</li>
		);
	}
}
