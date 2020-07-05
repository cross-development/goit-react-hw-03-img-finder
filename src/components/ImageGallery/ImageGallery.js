//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
//Style
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
	return (
		<ul className={styles.imageGallery}>
			{images.map(({ id, webformatURL, largeImageURL, tags }) => (
				<ImageGalleryItem
					key={id}
					webFormat={webformatURL}
					largeImage={largeImageURL}
					tags={tags}
				/>
			))}
		</ul>
	);
};

ImageGallery.propTypes = {
	images: PropTypes.array.isRequired,
};

export default ImageGallery;
