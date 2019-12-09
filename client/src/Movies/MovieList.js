import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import MovieCard from './MovieCard';

// const StyledLink = styled(Link)`
// 	color: ##ff69b4;
// 	text-decoration: none;
//   `;

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies : [],
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/movies')
			.then((response) => {
				this.setState(() => ({ movies: response.data }));
			})
			.catch((error) => {
				console.error('Server Error', error);
			});
	}

	// const MovieList = (props) => {
	// 	const [ movies, setMovies ] = useState([]);
	// 	useEffect(() => {
	// 		const getMovies = () => {
	// 			axios
	// 				.get('http://localhost:5000/api/movies')
	// 				.then((response) => {
	// 					setMovies(response.data);
	// 				})
	// 				.catch((error) => {
	// 					console.error('Server Error', error);
	// 				});
	// 		};

	// 		getMovies();
	// 	}, []);

	render() {
		return (
			<div className='movie-list'>{this.state.movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div>
		);
	}
}

// 	return <div className='movie-list'>{movies.map((movie) => <MovieDetails key={movie.id} movie={movie} />)}</div>;
// };

// function MovieDetails({ movie }) {
// 	const { title, director, metascore, stars } = movie;
// 	return (
// 		<div className='movie-card'>
// 			<h2>{title}</h2>
// 			<div className='movie-director'>
// 				Director: <em>{director}</em>
// 			</div>
// 			<div className='movie-metascore'>
// 				Metascore: <strong>{metascore}</strong>
// 			</div>
// 			<h3>Actors</h3>

// 			{stars.map((star) => (
// 				<div key={star} className='movie-star'>
// 					{star}
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// export default MovieList;

// function MovieDetails({ movie }) {
// 	const { title, director, metascore, stars } = movie;
// 	return (
// 		<StyledLink to={`/movies/${movie.id}`}>
// 			<MovieCard movie={movie} />
// 		</StyledLink>
// 	);
// }
