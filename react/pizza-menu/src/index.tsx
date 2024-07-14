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
			<Pizza
				name="Focaccia"
				ingredients="Tomato, Mozzarella, Basil"
				photoName="pizzas/focaccia.jpg"
				price={2.99}
			/>
			<Pizza
				name="Margherita"
				ingredients="Tomato, Mozzarella, Basil, Olive oil"
				photoName="pizzas/margherita.jpg"
				price={1.99}
			/>
		</main>
	)
}

const Pizza = (props: {
	name: string
	ingredients: string
	photoName: string
	price: number
}) => {
	return (
		<div className="pizza">
			<img src={props.photoName} alt={props.name} />
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.price}</span>
			</div>
		</div>
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
