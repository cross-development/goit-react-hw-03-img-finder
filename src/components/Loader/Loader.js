//Core
import React from 'react';
//Additional components
import Spinner from 'react-loader-spinner';
//Styles
const customCSS = {
	margin: '0 47%',
};

const Loader = () => {
	return <Spinner type="ThreeDots" color="#00BFFF" height={80} width={80} style={customCSS} />;
};

export default Loader;
