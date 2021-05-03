import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from './CategoriesStyles';
import {Link} from 'react-router-dom';
import {stringify} from 'query-string';

import subcategories from '../subcategories';

const LinkToRelatedSubcategories = ({record}) => {
	const classes = useStyles();
	return record ? (
		<Button
			size="small"
			color="primary"
			component={Link}
			to={{
				pathname: '/subcategories',
				search: stringify({
					page: 1,
					perPage: 25,
					sort: 'id',
					order: 'DESC',
					filter: JSON.stringify({category: record.id}),
				}),
			}}
			className={classes.link}
		>
			<subcategories.icon className={classes.icon} />
			SubCateg
		</Button>
	) : null;
};

export default LinkToRelatedSubcategories;
