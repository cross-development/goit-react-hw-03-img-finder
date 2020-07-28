//Core
import React from 'react';
//Additional components
import Spinner from 'react-loader-spinner';
//Styles
const customCSS = {
	margin: '0 47%',
	height: '80',
	width: '80',
};

const Loader = () => <Spinner type="ThreeDots" color="#0984e3" style={customCSS} />;

export default Loader;
