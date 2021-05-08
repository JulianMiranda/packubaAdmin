import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	SimpleForm,
	NumberInput,
	BooleanInput,
} from 'react-admin';
import {SubCategoriesTitle} from './SubCategoriesTitle';
import {makeStyles} from '@material-ui/core/styles';

export const styles = {
	first_name: {display: 'inline-block'},
	last_name: {display: 'inline-block', marginLeft: 32},
	t_name: {display: 'inline-block', marginLeft: 64},
	email: {width: 544},
	address: {maxWidth: 300},
	price: {display: 'inline-block', marginLeft: 32},
	currency: {display: 'inline-block', marginLeft: 32},
};

const useStyles = makeStyles(styles);

const SubCategoriesEdit = (props) => {
	const classes = useStyles();
	return (
		<Edit {...props} title={<SubCategoriesTitle />}>
			<SimpleForm redirect="list">
				<TextInput
					label="Nombre"
					autoFocus
					formClassName={classes.first_name}
					fullWidth
					source="name"
				/>
				<ReferenceInput
					label="Categoría"
					fullWidth
					formClassName={classes.last_name}
					source="category.id"
					reference="categories"
				>
					<SelectInput source="name" />
				</ReferenceInput>
				<NumberInput
					formClassName={classes.price}
					label="Precio"
					source="price"
					min={1}
					step={0.5}
				/>
				<SelectInput
					formClassName={classes.currency}
					source="currency"
					choices={[
						{id: 'USD', name: 'USD'},
						{id: 'CUP', name: 'CUP'},
					]}
				/>
				<BooleanInput label="Estado" formClassName={classes.t_name} source="status" />
				<NumberInput
					formClassName={classes.price}
					label="Peso en gramos"
					source="weight"
					min={1}
					step={1}
				/>
				<ImageInput
					formClassName={classes.address}
					source="images"
					resource="subcategories"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					fullWidth
					multiple="true"
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Edit>
	);
};
export default SubCategoriesEdit;
