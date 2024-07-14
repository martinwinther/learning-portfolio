import React from 'react'
import ReactDOM from 'react-dom/client'
import pizzaData from './data'
const App = () => {
	return (
		<div>
			<h1>Hello World</h1>
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
		</div>
	)
}

const Pizza = () => {
	return (
		<div>
			<img src={pizzaData[0].photoName} alt="focaccia" />
			<h2>{pizzaData[0].name}</h2>
			<p>{pizzaData[0].ingredients}</p>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
