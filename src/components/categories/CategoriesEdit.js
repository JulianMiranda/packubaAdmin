import React from 'react';
import {Edit, TextInput, ImageInput, ImageField, SimpleForm, BooleanInput} from 'react-admin';
import {CategoriesTitle} from './CategoriesTitle';
import {Grid} from '@material-ui/core';

const CategoriesEdit = (props) => {
	return (
		<Edit {...props} title={<CategoriesTitle />}>
			<SimpleForm redirect="list">
				<Grid container spacing={2}>
					<Grid item sm={6} xs={12}>
						<TextInput label="Nombre" autoFocus fullWidth source="name" />
					</Grid>{' '}
					<Grid item sm={12} xs={12}>
						<ImageInput
							source="image"
							resource="categories"
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
export default CategoriesEdit;
