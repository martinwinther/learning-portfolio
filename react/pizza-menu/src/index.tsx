import React from 'react'
import ReactDOM from 'react-dom/client'
import pizzaData from './data'
import './index.css'

const App = () => {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	)
}

const Header = () => {
	return (
		<header className="header">
			<h1>Fast React Pizza Co</h1>
		</header>
	)
}

const Menu = () => {
	return (
		<main className="menu">
			<h2>Menu</h2>
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
		</main>
	)
}

const Footer = () => {
	const hour = new Date().getHours()
	const openHour = 12
	const closeHour = 22
	const isOpen = hour >= openHour && hour <= closeHour

	if (isOpen) {
		return (
			<footer className="footer">
				<h3>Fast React Pizza Co.</h3>
				<p>Open until {closeHour} </p>
			</footer>
		)
	} else {
		return (
			<footer>
				<h2>Fast React Pizza Co.</h2>
				<p>Closed until {openHour} </p>
			</footer>
		)
	}
}

const Pizza = () => {
	return (
		<div className="pizza">
			<img src={pizzaData[0].photoName} alt="focaccia" />
			<h4>{pizzaData[0].name}</h4>
			<p>{pizzaData[0].ingredients}</p>
			<p>{pizzaData[0].price}</p>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
