import React from 'react';
import {Edit, TextInput, ImageInput, ImageField, SimpleForm, BooleanInput} from 'react-admin';
import {OrdersTitle} from './OrdersTitle';
import {Grid} from '@material-ui/core';

const OrdersEdit = (props) => {
	return (
		<Edit {...props} title={<OrdersTitle />}>
			<SimpleForm redirect="list">
				<Grid container spacing={2}>
					<Grid item sm={6} xs={12}>
						<TextInput label="Nombre" autoFocus fullWidth source="name" />
					</Grid>{' '}
					<Grid item sm={12} xs={12}>
						<ImageInput
							source="image"
							resource="Orders"
							accept="image/*"
							placeholder={<p>Drop your file here</p>}
							fullWidth
						>
							<ImageField source="url" />
						</ImageInput>

						<BooleanInput label="Estado" source="status" />
					</Grid>
				</Grid>
			</SimpleForm>
		</Edit>
	);
};
export default OrdersEdit;
