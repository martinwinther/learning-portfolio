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
	const pizzas = pizzaData
	const numPizzas = pizzas.length

	return (
		<main className="menu">
			<h2>Menu</h2>

			{numPizzas > 0 ? (
				<ul className="pizzas">
					{pizzas.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				<p>No pizzas available</p>
			)}
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

	return (
		<footer className="footer">
			{isOpen ? (
				<div className="order">
					<p>Open until {closeHour}</p>
					<button className="btn">Order Now</button>
				</div>
			) : (
				<div className="order">
					<p>Closed until {openHour}</p>
				</div>
			)}
		</footer>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
