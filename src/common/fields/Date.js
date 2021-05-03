import React from 'react';
import {DateField} from 'react-admin';

export const CustomDate = (props) => {
	return <DateField source="createdAt" showTime {...props} />;
};
