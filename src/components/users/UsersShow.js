import React from 'react';
import {useShowController, ImageField, Show, EmailField} from 'react-admin';
import {Typography, Grid, CardContent, Card} from '@material-ui/core';
import {UsersTitle} from './UsersTitle';
import {CustomBoolean} from '../../common/fields/Boolean';
import {useStyles} from './UsersStyles';

const UsersShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();

	if (!record) return null;
	return (
		<Show title={<UsersTitle />} {...props}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h4" gutterBottom align="center">
								{record.name}
							</Typography>
							<div>
								<Typography variant="h6" gutterBottom align="center">
									<EmailField className={classes.email} record={record} source="email" />
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ImageField record={record} align="center" source="image.url" />
						</Grid>
					</Grid>
					<div className={classes.Space}>&nbsp;</div>
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
					<div className={classes.Space}>&nbsp;</div>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h5" gutterBottom align="center">
								Role
							</Typography>
							<Typography variant="h6" gutterBottom align="center">
								{record.role}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="h5" gutterBottom align="center">
								Estado
							</Typography>
							<Typography variant="h6" gutterBottom align="center">
								<CustomBoolean record={record} label="Estado" source="status" />
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Show>
	);
};

export default UsersShow;
