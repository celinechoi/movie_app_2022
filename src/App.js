import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

// state(동적 데이터를 다룰 때 사용하는 객체)사용하기 위해선 클래스형 컴포넌트 필요.
// 클래스형 컴포넌트로 컴포넌트를 정의하였다면, state 객체를 사용해야 의미가 있다.
// 클래스형 컴포넌트는 리액트 컴포넌트의 클래스를 상속 받아야한다.
// 클래스형 컴포넌트는 render() 함수로 JSX를 반환한다.
// render() 함수는 리액트컴포넌트안에 정의되어 있다.
class App extends React.Component {
	state= {
		isLoading: true,
		movies: [],
	}
	getMovies = async () => {
		const {
			data: {
				data: {movies}
			}
		} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
		console.log('{}',{movies});
		this.setState({isLoading: false, movies: movies});
	}
	componentDidMount(){
		// setTimeout(()=>{ this.setState({isLoading: false}) }, 3000);
		/* axios는 네트워크를 사용하기 때문에 동작이 느리다. 따라서 싱글스레드인 자바스크립트는 axios가 호출한 json 파일이 다 로드 될때까지 기다리느라 다른 작업을 하지 않고 기다리게 된다. 따라서 async await 를 사용하여 자바스크립트에게 이 작업은 비동기(다른 작업을 동시에 하게끔)작업이라는 걸 알려주고 기다려야하는 대상 앞에 await를 붙여준다. */
		this.getMovies();
	}
	render(){
		const {isLoading, movies} = this.state;
		return ( 
			<section className='container'>
				{
					isLoading ? 
					(
						<div className='loader'>
							<span className='loader__text'>Loading...</span>
						</div>
					) 
					:
					(
						<div className='movies'>
						{movies.map((movie) => {
							return (<Movie key={movie.id} title={movie.title} year={movie.year} poster={movie.medium_cover_image} summary={movie.summary} genres={movie.genres} />)
						})}
						</div>
					)
				}
			</section>
		)
	}
}

export default App;