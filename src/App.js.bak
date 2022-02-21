import React from 'react';
import axios from 'axios';

class App extends React.Component {
	// 데이터 저장
	state= {
		isLoading: true,
		movies: [],
	}
	getMoives = async () => {
		const {
			data: {
				data: {movies}, // satate 키와 axios.get() 대입할 변수가 같을 때 축약 {movies: movies} 
			}
		} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
		this.setState({movies, isLoading: false});
	}
	componentDidMount() {
		this.getMoives();
	}
	render() {
		const {isLoading} = this.state;
		return <div>{isLoading? 'Loading...': 'We are ready'}</div>;
	}
}
export default App;