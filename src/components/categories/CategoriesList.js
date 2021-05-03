import React from 'react';
import {List, Datagrid, TextField, EditButton, SimpleList} from 'react-admin';
import {CustomBoolean} from '../../common/fields/Boolean';
import {CustomDate} from '../../common/fields/Date';
import {Filters} from './Filters';
import LinkToRelatedSubCat from './LinkToRelatedSubCat';
import {useMediaQuery} from '@material-ui/core';

const CategoriesList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	return (
		<List
			{...props}
			title="Categorías"
			sort={{field: 'createdAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.name}
					secondaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
					tertiaryText={(record) => <LinkToRelatedSubCat record={record} />}
				/>
			) : (
				<Datagrid /* rowClick="show" */>
					<TextField label="Nombre" source="name" />
					<CustomBoolean label="Estado" source="status" />
					<CustomDate label="Creado" source="createdAt" />
					<CustomDate label="Editado" source="updatedAt" />
					<LinkToRelatedSubCat label="SubCategorías" />
					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default CategoriesList;
