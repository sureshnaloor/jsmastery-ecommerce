import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './cartitem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({
	cart,
	handleEmptyCart,
	handleUpdateCartQty,
	handleRemoveFromCart,
}) => {
	const classes = useStyles();
	const isEmpty = false;

	const EmptyCart = () => {
		<Typography variant='subtitle1'>
			{' '}
			You have no items in cart, start adding some!
		</Typography>;
	};

	if (!cart.line_items) return 'Loading';

	const FilledCart = () => {
		return (
			<>
				<Grid container spacing={3}>
					{cart.line_items.map((item) => (
						<Grid item xs={12} sm={4} key={item.id}>
							{/* <div>{item.name} </div> */}
							<CartItem
								item={item}
								handleUpdateCartQty={handleUpdateCartQty}
								handleRemoveFromCart={handleRemoveFromCart}
							/>
						</Grid>
					))}
				</Grid>

				<div>
					<Typography variant='h5' gutterBottom>
						Subtotal: {cart.subtotal.formatted_with_symbol}
					</Typography>
				</div>

				<div>
					<Button
						size='large'
						className={classes.emptyButton}
						type='button'
						variant='contained'
						color='secondary'
						onClick={handleEmptyCart}
					>
						{' '}
						Empty Cart
					</Button>
					<Button
						size='large'
						className={classes.checkoutButton}
						variant='contained'
						color='primary'
						component={Link}
						to='/checkout'
					>
						Checkout
					</Button>
				</div>
			</>
		);
	};
	return (
		<Container className={classes.toolbar}>
			<Typography className={classes.title} variant='h5' gutterBottom>
				Your shopping cart:{' '}
			</Typography>

			{isEmpty ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
};

export default Cart;
