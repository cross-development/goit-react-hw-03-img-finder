//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ImageGalleryItem from '../ImageGalleryItem';
//Style
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => (
	<ul className={styles.list}>
		{images.map(({ id, webformatURL, largeImageURL, tags }) => (
			<ImageGalleryItem key={id} webFormat={webformatURL} largeImage={largeImageURL} tags={tags} />
		))}
	</ul>
);

ImageGallery.propTypes = {
	images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.node.isRequired).isRequired).isRequired,
};

export default ImageGallery;
