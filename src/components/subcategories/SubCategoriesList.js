import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	EditButton,
	ReferenceField,
	SimpleList,
	NumberField,
} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';
import {CustomBoolean} from '../../common/fields/Boolean';
import {CustomDate} from '../../common/fields/Date';

const SubCategoriesList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	return (
		<List
			{...props}
			title="SubCategorías"
			sort={{field: 'createdAt', order: 'DESC'}}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.name}
					secondaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
				/>
			) : (
				<Datagrid rowClick="show">
					<TextField label="Nombre" source="name" />
					<CustomBoolean label="Estado" source="status" />
					<NumberField source="price" options={{style: 'currency', currency: 'USD'}} />
					<TextField label="Nombre" source="name" />
					<ReferenceField label="Categoría" source="category" reference="categories">
						<TextField source="name" />
					</ReferenceField>

					{/* <CustomDate label="Creado" source="createdAt" /> */}
					<CustomDate label="Editado" source="updatedAt" />
					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default SubCategoriesList;
