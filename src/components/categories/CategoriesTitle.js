import React from 'react';

export const CategoriesTitle = ({record}) => {
	return <span>Tipo de Negocio {record ? `"${record.name}"` : ''}</span>;
};
