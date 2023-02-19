export default function FetchedData({ currentPlanet }) {

	function cleanData(dirtyData) {
		for (let i = 0; i < dirtyData.length; i++) {
			dirtyData[i][0] = dirtyData[i][0].replace(/_/g, ' ');
		}
		return dirtyData
	}


	function createArrays(data) {
		const keysArr = []
		const valuesArr = []

		data.map(item => {
			keysArr.push(item[0]+':')
			valuesArr.push(item[1])
		})
		return [keysArr, valuesArr]
	}

	
	function createElements(dataArr) {
		let elementsArr = []
		dataArr.map(i => {
			elementsArr.push(
				<li className='fetched-item' key={i}>{i}</li>
			)
		})
		return elementsArr
	}


	const usefulData = Object.entries(currentPlanet).slice(0, -5);
	const cleanedData = cleanData(usefulData);

	const keysArr = createArrays(cleanedData)[0];
	const valuesArr = createArrays(cleanedData)[1];


	return(
		<div className='fetched'>
			<div className='fetched-keys'>
				{createElements(keysArr)}
			</div>
			<div className='fetched-values'>
				{createElements(valuesArr)}
			</div>
		</div>
	)
}