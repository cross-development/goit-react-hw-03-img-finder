const API_KEY = '16822291-3bd987bc1a9b2ff27c6ed5ac6';

const fetchImagesByQuery = async (searchQuery, page = 1) => {
	const response = await fetch(
		`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
	);
	const parsedResponse = await response.json();

	return parsedResponse.hits;
};

export default {
	fetchImagesByQuery,
};
