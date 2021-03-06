//Core
import React, { Component } from 'react';
//Components
import Loader from '../Loader';
import Button from '../Button';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Notification from '../Notification';
//Services
import imagesApi from 'services/imagesApi';
//Styles
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends Component {
	state = {
		page: 1,
		images: [],
		error: null,
		loading: false,
		searchQuery: '',
	};

	componentDidUpdate(prevProps, prevState) {
		const prevQuery = prevState.searchQuery;
		const nextQuery = this.state.searchQuery;

		if (prevQuery !== nextQuery) {
			this.fetchImages();
		}

		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	}

	fetchImages = () => {
		const { searchQuery, page } = this.state;

		this.setState({ loading: true });

		imagesApi
			.fetchImagesByQuery(searchQuery, page)
			.then(images =>
				this.setState(prevState => ({
					images: [...prevState.images, ...images],
					page: prevState.page + 1,
				})),
			)
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	};

	handleFormSubmit = query => this.setState({ searchQuery: query, page: 1, images: [] });

	render() {
		const { loading, error, images } = this.state;

		return (
			<>
				<Searchbar onSubmit={this.handleFormSubmit} />

				{error && <Notification message={error.message} />}

				{images.length > 0 && <ImageGallery images={images} />}

				{loading && <Loader />}

				{images.length > 0 && !loading && <Button label="Load more" onLoad={this.fetchImages} />}
			</>
		);
	}
}
