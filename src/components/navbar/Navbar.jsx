import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	Menu,
	MenuItem,
	Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Logo from '../../assets/logo1.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	const location = useLocation();

	return (
		<>
			<AppBar className={classes.appBar} position='fixed' color='inherit'>
				<Toolbar>
					<Typography
						component={Link}
						to='/'
						variant='h6'
						className={classes.title}
						color='inherit'
					>
						<img
							src={Logo}
							alt='commerce.js'
							height='25px'
							className={classes.image}
						/>
						Suresh Store
					</Typography>
					<div className={classes.grow}>
						{location.pathname === '/' ? (
							<div className={classes.button}>
								<IconButton
									component={Link}
									to='/cart'
									aria-label='show cart items'
									color='inherit'
								>
									<Badge badgeContent={totalItems} color='secondary'>
										<ShoppingCart />
									</Badge>
								</IconButton>
							</div>
						) : null}
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
