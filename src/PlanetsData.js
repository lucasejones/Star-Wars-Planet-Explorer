import PlanetBox from './PlanetBox.js';
import PlanetsList from './PlanetsList.js'

export default function PlanetsData({ data }) {
	return(
		<div className='planets-content-container'>
			<PlanetsList data={data}/>
			<PlanetBox data={data} />
		</div>
	)
}