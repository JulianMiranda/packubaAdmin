import React from 'react';

export const OrdersTitle = ({record}) => {
	console.log(record);
	return <span>Pedido de: {record ? `"${record.user.name}"` : ''}</span>;
};
