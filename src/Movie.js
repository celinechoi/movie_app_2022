import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css'
// 함수형 컴포넌트
function Movie({title, year, summary, poster}) {
	return (
		<div class="movie">
			<img src={poster} alt={title} />
			<div class="movie__data">
				<h3 class="movie__title" style={{backgroundColor: 'red'}}>{title}</h3>
				<h5 class="movie__year">{year}</h5>
				<p class="movie__summary">{summary}</p>		
			</div>
		</div>
	)
}
Movie.prototype = {
	title: Proptypes.string.isRequired,
	year: Proptypes.number.isRequired,
	summary: Proptypes.string.isRequired,
	poster: Proptypes.string.isRequired
}
export default Movie;