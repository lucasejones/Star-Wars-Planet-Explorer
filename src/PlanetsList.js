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

		return(
			items.push(
				<a 
					href={'#'+item.name}
					onClick={(e) => handleClick(e, item)}
				>
					<li className='nav-name'>
						<span className={item.name === planet.name ? 'nav-item-current' : 'nav-item'}>{item.name.toLowerCase()}</span>
					</li>
				</a>
			)
		)
	})

	
	return(
		<div className='nav-group'>
			{items}
		</div>
	)
}



