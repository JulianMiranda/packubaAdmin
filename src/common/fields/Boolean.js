import React from 'react';
import {BooleanField} from 'react-admin';

export const CustomBoolean = (props) => {
	const {record} = props;
	const color = record && record.status ? '#2fd82f' : 'red';
	return <BooleanField style={{color}} {...props} />;
};
