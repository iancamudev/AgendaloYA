import { useEffect, useState } from 'react'

type data = {
	msg: string
}

function App() {

	const [data, setData] = useState<data>()

	useEffect(() => {
		fetch('http://localhost:3000')
			.then(json => json.json())
			.then(res => setData(res))
	}, [])
	
	if (!data) return <div> Cargando... </div>

	console.log(data)

	return (
		<div>
			{data.msg}
		</div>
	)
}

export default App