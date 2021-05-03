import React, {useEffect, useState} from 'react';
import {
	Edit,
	TextInput,
	Toolbar,
	ImageField,
	ImageInput,
	SelectInput,
	FormWithRedirect,
	BooleanInput,
} from 'react-admin';
import {UsersTitle} from './UsersTitle';
import {Box, Card, CardContent} from '@material-ui/core';
import {fetchRoles} from '../../fetch';

const UsersEdit = (props) => {
	return (
		<Edit {...props} title={<UsersTitle />} component="div">
			<UserForm />
		</Edit>
	);
};
const UserForm = (props) => {
	const [role, setRole] = useState([]);
	useEffect(() => {
		(async () => {
			const roleBackend = await fetchRoles();
			setRole(Object.keys(roleBackend.data) || []);
		})();
	}, []);

	return (
		<FormWithRedirect
			{...props}
			render={(formProps) => (
				<Card>
					<form>
						<CardContent>
							<Box display={{md: 'block', lg: 'flex'}}>
								<Box flex={2} mr={{md: 0, lg: '1em'}}>
									<Box display={{xs: 'block', sm: 'flex'}}>
										<Box flex={1} mr={{xs: 0, sm: '0.5em'}}>
											<TextInput source="name" resource="users" fullWidth />
										</Box>
										<Box flex={1} ml={{xs: 0, sm: '0.5em'}}>
											<TextInput
												type="email"
												source="email"
												resource="users"
												validation={{email: true}}
												fullWidth
											/>
										</Box>
									</Box>
									<Box display={{xs: 'block', sm: 'flex'}}>
										<Box flex={1} mr={{xs: 0, sm: '0.5em'}}>
											<ImageInput source="image" resource="users" accept="image/*" fullWidth>
												<ImageField source="url" title="avatar" />
											</ImageInput>
										</Box>
										<Box flex={1} ml="1em" mr={{xs: 0, sm: '0.5em'}}>
											<SelectInput
												label="Rol"
												source="role"
												choices={role.map((x) => ({id: x, name: x}))}
											/>
											<BooleanInput label="Estado" source="status" />
										</Box>
									</Box>

									<Box mt="1em" />
								</Box>
							</Box>
						</CardContent>
						<Toolbar
							record={formProps.record}
							basePath={formProps.basePath}
							undoable={true}
							invalid={formProps.invalid}
							handleSubmit={formProps.handleSubmit}
							saving={formProps.saving}
							resource="users"
						/>
					</form>
				</Card>
			)}
		/>
	);
};

export default UsersEdit;
