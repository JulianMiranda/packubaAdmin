import React from 'react';

import {
	Create,
	TextInput,
	ImageInput,
	ImageField,
	ReferenceInput,
	SelectInput,
	NumberInput,
	SimpleForm,
	required,
} from 'react-admin';
import {Grid} from '@material-ui/core';

const SubCategoriesCreate = (props) => {
	return (
		<Create {...props} title="Crear SubCategoría">
			<SimpleForm redirect="list">
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12}>
						<TextInput label="Nombre" autoFocus source="name" validate={required()} />
						<ReferenceInput source="category" reference="categories" validate={required()}>
							<SelectInput source="name" />
						</ReferenceInput>
						<NumberInput label="Precio" source="price" min={1} step={0.5} validate={required()} />
						<NumberInput label="Peso en gramos" source="weight" min={1} step={1} />
					</Grid>
					<ImageInput
						source="images"
						resource="subcategories"
						accept="image/*"
						placeholder={<p>Drop your file here</p>}
						multiple="true"
						fullWidth
						validate={required()}
					>
						<ImageField source="url" />
					</ImageInput>
				</Grid>
			</SimpleForm>
		</Create>
	);
};
export default SubCategoriesCreate;
