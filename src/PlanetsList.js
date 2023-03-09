import PlanetBox from './PlanetBox.js';

export default function PlanetsList({ data, planet, onChange, onFlipRandom }) {
	
	function handleClick(e, name) {
		e.preventDefault()
		onFlipRandom()
		onChange(name)
	}

	const items = []
	data.map((item) => {
		if (item.name === 'Yavin IV') {
			item.name = 'Yavin-IV'
		}

		items.push(
			<div className='nav-div' key={item.name}>
				<a 
					href='.planet-box'
					onClick={(e) => handleClick(e, item)}
				>
					<li className='nav-name'>
						<span className={item.name === planet.name ? 'nav-item-current' : 'nav-item'}>{item.name.toLowerCase()}</span>
					</li>
				</a>
			</div>
		)
	})

	
	return(
		<div className='nav-group'>
			{items}
		</div>
	)
}



