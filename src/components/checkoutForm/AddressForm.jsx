import React, { useState } from 'react';
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { commerce } from '../../lib/commerce'

import FormInput from './CustomTextField';

const AddressForm = () => {
	const [shippingCountries, setShippingCountries] = useState([]);
	const [shippingCountry, setShippingCountry] = useState('');
	const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
	const [shippingSubdivision, setShippingSubdivision] = useState('');
	const [shippingOptions, setShippingOptions] = useState([]);
	const [shippingOption, setShippingOption] = useState('');

	const methods = useForm();

	const fetchShippingCountries = async(checkoutTokenId) => {
		const response = await.commerce.servivces.LocaleListShippingCountries(checkoutTokenId)
		const countries = response.countries
		setShippingCountries(countries)
	}

	return (
		<>
			<Typography variant='h6' gutterBottom>
				{' '}
				Shipping address{' '}
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit={null}>
					<Grid container spacing={3}>
						<FormInput required name='firstname' label='first name' />
						<FormInput required name='lastname' label='Last name' />
						<FormInput required name='address1' label='Address1' />
						<FormInput required name='email' label='Email' />
						<FormInput required name='city' label='City' />
						<FormInput required name='zip' label='ZIP/Postal code' />

						<Grid item xs={12} sm={6}>
							<InputLabel> Shipping country</InputLabel>
							<Select value={} fullwidth onChange={}>
								<MenuItem key={} value={}>
									{' '}
									select me
								</MenuItem>
							</Select>
						</Grid>

						<Grid item xs={12} sm={6}>
							<InputLabel> Shipping subdivision</InputLabel>
							<Select value={} fullwidth onChange={}>
								<MenuItem key={} value={}>
									{' '}
									select me
								</MenuItem>
							</Select>
						</Grid>

						<Grid item xs={12} sm={6}>
							<InputLabel> Shipping options</InputLabel>
							<Select value={} fullwidth onChange={}>
								<MenuItem key={} value={}>
									{' '}
									select me
								</MenuItem>
							</Select>
						</Grid>
					</Grid>
				</form>
			</FormProvider>
		</>
	);
};

export default AddressForm;
