import React from 'react';
import {useShowController, ImageField, Show} from 'react-admin';
import {Typography, Grid, CardContent, Card} from '@material-ui/core';
import {CategoriesTitle} from './CategoriesTitle';
import {CustomBoolean} from '../../common/fields/Boolean';
import {useStyles} from './CategoriesStyles';

const CategoriesShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();

	if (!record) return null;
	return (
		<Show title={<CategoriesTitle />} {...props}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h4" gutterBottom align="center">
								{record.name}
							</Typography>
							<ImageField record={record} align="center" source="image.url" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Typography variant="h5" gutterBottom align="center">
										Creado{' '}
									</Typography>
									<Typography gutterBottom align="center">
										{new Date(record.createdAt).toLocaleDateString()}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Typography variant="h5" gutterBottom align="center">
										Editado{' '}
									</Typography>
									<Typography gutterBottom align="center">
										{new Date(record.updatedAt).toLocaleDateString()}
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={12}>
								<div className={classes.Space}>&nbsp;</div>
								<Typography variant="h5" gutterBottom align="center">
									Status
								</Typography>
								<Typography variant="h6" gutterBottom align="center">
									<CustomBoolean record={record} label="Estado" source="status" />
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Show>
	);
};

export default CategoriesShow;
