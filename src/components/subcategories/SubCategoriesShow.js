import React from 'react';
import {useShowController, ImageField, Show} from 'react-admin';
import {Typography, Grid, CardContent, Card} from '@material-ui/core';
import {SubCategoriesTitle} from './SubCategoriesTitle';
import {CustomBoolean} from '../../common/fields/Boolean';
import {useMediaQuery} from '@material-ui/core';
import {useStyles} from './SubCategoriesStyles';

const SubCategoriesShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();

	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	if (!record) return null;
	return (
		<Show title={<SubCategoriesTitle />} {...props}>
			{isSmall ? (
				<Card>
					<CardContent>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom align="center">
									{record.name}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom align="center">
									{record.category.name}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom align="center">
									<ImageField record={record} align="center" source="image.url" />
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom align="center">
									Creado: {new Date(record.createdAt).toLocaleDateString()}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom align="center">
									Editado: {new Date(record.updatedAt).toLocaleDateString()}
								</Typography>
							</Grid>

							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom align="center">
									Activo: <CustomBoolean record={record} label="Estado" source="status" />
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			) : (
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Typography variant="h4" gutterBottom align="center">
									{record.name}
								</Typography>
								{record.images.map((image) => (
									<img src={image.url} alt="" style={{margin: 10}} />
								))}
								<ImageField record={record} align="center" source="images" />
							</Grid>
							<Grid item xs={6}>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Typography variant="h5" gutterBottom align="center">
											Creado{' '}
										</Typography>
										<Typography gutterBottom align="center">
											{new Date(record.createdAt).toLocaleDateString()}
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography variant="h5" gutterBottom align="center">
											Editado{' '}
										</Typography>
										<Typography gutterBottom align="center">
											{new Date(record.updatedAt).toLocaleDateString()}
										</Typography>
									</Grid>
								</Grid>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<div className={classes.Space}>&nbsp;</div>
										<Typography variant="h5" gutterBottom align="center">
											Activo
										</Typography>
										<Typography variant="h6" gutterBottom align="center">
											<CustomBoolean record={record} label="Estado" source="status" />
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<div className={classes.Space}>&nbsp;</div>
										<Typography variant="h5" gutterBottom align="center">
											Peso: <i>{record.weight ? record.weight : ''} g</i>
										</Typography>
									</Grid>
								</Grid>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<div className={classes.Space}>&nbsp;</div>
										<Typography variant="h5" gutterBottom align="center">
											Categoría: <i>{record.category.name}</i>
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<div className={classes.Space}>&nbsp;</div>

										<Typography variant="h5" gutterBottom align="center">
											Precio: <i>$ {record.price} </i>
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			)}
		</Show>
	);
};

export default SubCategoriesShow;
