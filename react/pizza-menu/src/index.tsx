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
			<ul className="pizzas">
				{pizzaData.map((pizza) => (
					<Pizza pizzaObj={pizza} key={pizza.name} />
				))}
			</ul>
		</main>
	)
}

const Pizza = (props: {
	pizzaObj: {
		name: string
		ingredients: string
		photoName: string
		price: number
	}
}) => {
	return (
		<li className="pizza">
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
			<div>
				<h3>{props.pizzaObj.name}</h3>
				<p>{props.pizzaObj.ingredients}</p>
				<span>{props.pizzaObj.price}</span>
			</div>
		</li>
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
				<p>Open until {closeHour}</p>
			</footer>
		)
	} else {
		return (
			<footer>
				<h2>Fast React Pizza Co.</h2>
				<p>Closed until {openHour}</p>
			</footer>
		)
	}
}
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
