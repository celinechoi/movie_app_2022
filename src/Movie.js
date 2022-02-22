import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css'
// 함수형 컴포넌트
function Movie({title, year, summary, poster, genres}) {
	return (
		<div className="movie">
			<img src={poster} alt={title} />
			<div className="movie__data">
				<h3 className="movie__title" style={{backgroundColor: 'red'}}>{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<ul className="movie__genres">
					{
						genres.map((genre, i) => {
							return <li key={i}>{genre}</li>
						})
					}
				</ul>
				<p className="movie__summary">{summary.slice(0, 180)}...</p>
			</div>
		</div>
	)
}
Movie.prototype = {
	title: Proptypes.string.isRequired,
	year: Proptypes.number.isRequired,
	summary: Proptypes.string.isRequired,
	poster: Proptypes.string.isRequired,
	genres: Proptypes.arrayOf(Proptypes.string).isRequired
}
export default Movie;