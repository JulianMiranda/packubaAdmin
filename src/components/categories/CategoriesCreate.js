import React from 'react';
import {Create, SimpleForm, TextInput, ImageInput, ImageField, required} from 'react-admin';
import {useStyles} from './CategoriesStyles';

const CategoriesCreate = (props) => {
	const classes = useStyles();
	return (
		<Create {...props} title="Crear Tipo de Negocio">
			<SimpleForm redirect="list">
				<TextInput source="name" autoFocus validate={required()} formClassName={classes.name} />
				<ImageInput
					formClassName={classes.image}
					source="image"
					resource="categories"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					validate={required()}
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};
export default CategoriesCreate;
