import React from 'react';

function Food({ name, picture }) {
	return (
		<div>
			<h2>I like { name }</h2>
			<img src={picture} />
		</div>
	);
}

const foodILike = [
	{
		name: 'Kimchi',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IDrNtl4pG_zepTDko3IUhgHaHa%26pid%3DApi%26h%3D160&f=1',
	},
	{
		name: 'Samgyeopsal',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.z1NRYI5oQWdaIQQ7QJwhjAHaHa%26pid%3DApi%26h%3D160&f=1'
	},
	{
		name: 'Bibimbap',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PGMADTeqQpHS4FZiUJ4T1wHaE8%26pid%3DApi%26h%3D160&f=1'
	},
	{
		name: 'Doncasu',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UpDCozCT4DXb6y8AvIzGgAHaE6%26pid%3DApi%26h%3D160&f=1'
	},
	{
		name: 'Kimbap',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eb8dner0MAzd2wx3n69F9wHaEK%26pid%3DApi%26h%3D160&f=1'
	},
];

function App() {
  return (
		<div>
			{foodILike.map(dish => (
				<Food name={dish.name} picture={dish.image}/>
			))}
		</div>
	);
}

export default App;