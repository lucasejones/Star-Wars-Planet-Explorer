import PlanetsList from './PlanetsList.js';
import PlanetBox from './PlanetBox.js';
import { useState } from 'react';

export default function PlanetsData({ data }) {
	const [planet, setPlanet] = useState(data[0])
	const [useRandom, setUseRandom] = useState(false);

	function handleChange(newPlanet) {
		setPlanet(newPlanet)
	}

	if (planet.name === 'Yavin IV') {
		planet.name = 'Yavin-IV' 
	} 

	return(
		<div className='planets-content-container'>
			<PlanetsList 
				data={data} 
				planet={planet}
				onChange={handleChange}
				onFlipRandom={() => setUseRandom(false)}
			/>
			<PlanetBox 
				data={data} 
				planet={planet} 
				onChange={handleChange}
				useRandom={useRandom}
				onFlipRandom={() => setUseRandom(true)}
			/>
		</div>
	)
}