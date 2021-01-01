import {useState, useEffect} from 'react'

import { commerce } from './lib/commerce';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Products from './components/products/Products'
import Navbar from './components/navbar/Navbar'
import Cart from './components/cart/Cart'
import Checkout from './components/checkoutForm/checkout/Checkout'


const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({})

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
		// console.log(data)
	};

	const fetchCart = async () => {
		const cart = await commerce.cart.retrieve()
		setCart(cart)
	}

	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity)
		setCart(item.cart)
	}

	const handleUpdateCartQty = async(productId, quantity) => {
		const response = await commerce.cart.update(productId, {quantity})
		setCart(response.cart)
	}

	const handleRemoveFromCart = async (productId) => {
		const response = await commerce.cart.remove(productId)
		setCart(response.cart)
	}

	const handleEmptyCart = async() => {
		const response = await commerce.cart.empty()
		setCart(response.cart)
	}

	useEffect(() => {
		fetchProducts();
		fetchCart()		
	}, []);

	console.log(cart);
	
	return (
		<Router>
			{' '}
			<div>
				{/* <h3>another ecommmerce app </h3> */}
				<Navbar totalItems={cart.total_items} />
				<Switch>
					<Route exact path='/'>
						<Products products={products} onAddToCart={handleAddToCart} />
					</Route>
					<Route exact path='/cart'>
						<Cart
							cart={cart}
							handleUpdateCartQty={handleUpdateCartQty}
							handleRemoveFromCart={handleRemoveFromCart}
							handleEmptyCart={handleEmptyCart}
						/>
					</Route>
					<Route exact path='/checkout'>
						<Checkout />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
