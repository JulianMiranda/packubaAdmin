import React from 'react';

export const SubCategoriesTitle = ({record}) => {
	return <span>Negocio {record ? `"${record.name}"` : ''}</span>;
};
