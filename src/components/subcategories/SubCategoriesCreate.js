import React from 'react';

import {Create, ImageInput, ImageField, ReferenceInput, SelectInput, SimpleForm} from 'react-admin';
import {Grid} from '@material-ui/core';

const SubCategoriesCreate = (props) => {
	return (
		<Create {...props} title="Crear SubCategoría">
			<SimpleForm redirect="list">
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12}>
						<ReferenceInput source="category" reference="categories">
							<SelectInput source="name" />
						</ReferenceInput>
					</Grid>
					<ImageInput
						source="image"
						resource="subcategories"
						accept="image/*"
						placeholder={<p>Drop your file here</p>}
						fullWidth
					>
						<ImageField source="url" />
					</ImageInput>
				</Grid>
			</SimpleForm>
		</Create>
	);
};
export default SubCategoriesCreate;
