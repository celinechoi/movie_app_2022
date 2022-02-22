import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

// state 사용하기 위해 컴포넌트는 클래스형 컴포넌트
// 그래서 class형 컴포넌트 선언하고 state를 사용하지 않으면 에러뜬다.
// state 사용이 불필요하면 함수형 컴포넌트로 변경.
class App extends React.Component {
	state= {
		isLoading: true,
		movies: [],
	}
	getMovies = async () => {
		const {
			data : {
				data : {
					movies
				}
			}
		} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
		console.log({movies});
		this.setState({isLoading: false, movies: movies})
	}
	componentDidMount(){
		this.getMovies();
	}
	render(){
		const {isLoading, movies} = this.state;
		return (
			<section className="container">
				{
					isLoading? 
					(
						<div className="loader">
							<span className="loader__text">Loading...</span>
						</div>
						)
					:
					( 
						<div className="movies">
						{
							movies.map((movie) => (
								<Movie key={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
							))
						}
						</div>
					)
			}
			</section>
		)
	}
}

export default App;