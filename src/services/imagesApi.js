//Core
const API_KEY = '16822291-3bd987bc1a9b2ff27c6ed5ac6';
const baseURL = 'https://pixabay.com/api';

const fetchImagesByQuery = async (searchQuery, page = 1) => {
	const response = await fetch(
		`${baseURL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
	);
	const parsedResponse = await response.json();

	return parsedResponse.hits;
};

export default {
	fetchImagesByQuery,
};
