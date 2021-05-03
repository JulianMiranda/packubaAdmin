import React from 'react';
import {useShowController, Show} from 'react-admin';
import {Grid, CardContent, Card} from '@material-ui/core';
import {OrdersTitle} from './OrdersTitle';

const OrdersShow = (props) => {
	const {record} = useShowController(props);

	if (!record) return null;
	return (
		<Show title={<OrdersTitle />} {...props}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid container spacing={2}>
							<Grid item xs={6} sm={6}>
								{record.car.map((item, i) => (
									<>
										<div
											style={{
												flexDirection: 'row',
												marginTop: 10,
											}}
										>
											{item.cantidad} {item.subcategory.name}
											{'  '}
										</div>
									</>
								))}
							</Grid>
							<Grid item xs={6} sm={6}>
								{record.car.map((item, i) => (
									<>
										<div style={{flex: 1, marginTop: 10}}>$ {item.subcategory.price}</div>
									</>
								))}
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Show>
	);
};

export default OrdersShow;
