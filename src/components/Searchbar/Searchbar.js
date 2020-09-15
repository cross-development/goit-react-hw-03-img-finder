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

	handleChange = ({ target: { value } }) => this.setState({ inputValue: value });

	handleSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.inputValue);
		this.setState({ inputValue: '' });
	};

	render() {
		return (
			<header className={styles.searchbar}>
				<form className={styles.searchForm} onSubmit={this.handleSubmit}>
					<button type="submit" className={styles.button}>
						<span className={styles.label}>Search</span>
					</button>

					<input
						autoFocus
						type="text"
						autoComplete="off"
						className={styles.input}
						onChange={this.handleChange}
						value={this.state.inputValue}
						placeholder="Search images and photos"
					/>
				</form>
			</header>
		);
	}
}
