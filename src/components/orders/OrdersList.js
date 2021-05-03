import React from 'react';
import {List, Datagrid, TextField, SimpleList, NumberField, ArrayField} from 'react-admin';
import {Filters} from './Filters';
import {useMediaQuery} from '@material-ui/core';

const OrdersList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	return (
		<List
			{...props}
			title="Ordenes"
			sort={{field: 'createdAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.user.name}
					secondaryText={(record) => record.cost}
				/>
			) : (
				<Datagrid rowClick="show">
					<TextField label="Usuario" source="user.name" />
					<NumberField
						label="Pedido"
						source="cost"
						options={{style: 'currency', currency: 'USD'}}
					/>

					<ArrayField source="car" label="Productos">
						<Datagrid>
							<NumberField source="cantidad" />
							<TextField label="Producto" source="subcategory.name" />
						</Datagrid>
					</ArrayField>
					{/* <CustomBoolean label="Estado" source="status" />
					<CustomDate label="Creado" source="createdAt" />
					<CustomDate label="Editado" source="updatedAt" /> */}
					{/* <EditButton label="Editar" /> */}
				</Datagrid>
			)}
		</List>
	);
};
export default OrdersList;
