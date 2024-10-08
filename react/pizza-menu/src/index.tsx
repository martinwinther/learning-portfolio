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
				<>
					<p>
						Authentic Italian pizza. We're all about quality and taste. We're
						not a chain restaurant, we're a family business.
					</p>
					<ul className="pizzas">
						{pizzas.map((pizza) => (
							<Pizza pizzaObj={pizza} key={pizza.name} />
						))}
					</ul>
				</>
			) : (
				<p>No pizzas available</p>
			)}
		</main>
	)
}

const Pizza = ({
	pizzaObj,
}: {
	pizzaObj: {
		name: string
		ingredients: string
		photoName: string
		price: number
		soldOut: boolean
	}
}) => {
	return (
		<li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? 'Sold Out' : `$${pizzaObj.price}`}</span>
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
				<Order closeHour={closeHour} />
			) : (
				<div className="order">
					<p>Closed until {openHour}:00</p>
				</div>
			)}
		</footer>
	)
}

const Order = ({ closeHour }) => {
	return (
		<div className="order">
			<p>Open until {closeHour}</p>
			<button className="btn">Order Now</button>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
