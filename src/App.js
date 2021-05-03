import React from 'react';
import {Admin, Resource} from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './auth/Provider';
import {CustomLoginPage} from './auth/Login';
import Users from './components/users';
import Categories from './components/categories';
import SubCategories from './components/subcategories';
import Theme from './components/layout/Theme';
import {Layout} from './components/layout';
import Orders from './components/orders';

/* import RolesReducer from './store/reducers/roles.reducer'; */
/* import RolesSaga from './store/sagas/roles.saga'; */

const App = (props) => {
	return (
		<Admin
			title="ClubMe Admin"
			theme={Theme}
			/* customSagas={[RolesSaga]} */
			/* customReducers={{roles: RolesReducer}} */
			dataProvider={dataProvider}
			authProvider={authProvider}
			loginPage={CustomLoginPage}
			layout={Layout}
		>
			{(permissions) =>
				permissions === 'ADMIN' && [
					<Resource options={{label: 'Negocios'}} name="categories" {...Categories} />,
					<Resource options={{label: 'Negocios'}} name="subcategories" {...SubCategories} />,
					<Resource options={{label: 'Usuarios'}} name="users" {...Users} />,
					<Resource options={{label: 'Ordenes'}} name="orders" {...Orders} />,
				]
			}
		</Admin>
	);
};

export default App;
