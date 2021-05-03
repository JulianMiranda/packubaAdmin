import React from 'react';
import {Filter, TextInput} from 'react-admin';

export const Filters = (props) => (
	<Filter {...props}>
		<TextInput label="Buscar" source="q" alwaysOn resettable />
	</Filter>
);
