//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	state = {
		inputValue: '',
	};

	handleChange = e => {
		const { value } = e.target;
		this.setState({ inputValue: value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.inputValue);
		this.setState({ inputValue: '' });
	};

	render() {
		const { inputValue } = this.state;

		return (
			<header className={styles.searchbar}>
				<form className={styles.searchForm} onSubmit={this.handleSubmit}>
					<button type="submit" className={styles.searchFormButton}>
						<span className={styles.searchFormButtonLabel}>Search</span>
					</button>

					<input
						className={styles.searchFormInput}
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						value={inputValue}
						onChange={this.handleChange}
					/>
				</form>
			</header>
		);
	}
}
