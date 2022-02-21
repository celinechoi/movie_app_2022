import React from 'react';
import axios from 'axios';
import Movie from './Movie';
// state(객체 형태의 데이터)는 컨포넌트 간에 데이터를 전달하는 역할로, 사용을 위해 함수형 컴포넌트가 아닌 클래스형 컴포넌트(render로 값을 반환)가 있어야 한다.
class App extends React.Component{
	state={
		isLoading: true,
		movies: [],
	}
	getMovies= async () => {
		const { data: { data: {movies} } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
		// console.log(movies.data.data.movies); // 구조 분해 할당 전,
		// console.log({movies}) // 구조 분해 할당 후
		this.setState({isLoading: false, movies: movies});// data update
	}
	componentDidMount(){
		this.getMovies();
	}
	render() {
		const {isLoading, movies} = this.state
		return (
			<div>
				{
					isLoading? 'is loading...':movies.map((movie) => {
						return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />;
					})
				}
			</div>
		);
	}
}
export default App;