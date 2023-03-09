import PlanetBox from './PlanetBox.js';
import { useState } from 'react';

export default function PlanetsList({ data }) {
	const [planet, setPlanet] = useState(data[0])
	const [useRandom, setUseRandom] = useState(false);

	function handleClick(e, name) {
		e.preventDefault()
		setUseRandom(false)
		setPlanet(name)
	}

	const items = []
	data.map((i) => {
		if (i.name === 'Yavin IV') {
			i.name = 'Yavin-IV'
		}

		items.push(
			<div className='nav-div' key={i.name}>
				<a 
					href='.planet-box'
					onClick={(e) => handleClick(e, i)}
				>
					<li className='nav-name'>
						<span className={i.name === planet.name ? 'nav-item-current' : 'nav-item'}>{i.name.toLowerCase()}</span>
					</li>
				</a>
			</div>
		)
	})

	
	return(
		<div className='planets-content-container'>
			<div className='nav-group'>
				{items}
			</div>
			<PlanetBox 
				data={data} 
				planet={planet} 
				useRandom={useRandom}
				onRandom={() => setUseRandom(true)}
			/>
		</div>
	)
}



