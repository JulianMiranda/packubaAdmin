export const PrepareGetManyRef = async (resource, params) => {
	if (resource === 'categories') return await categories(resource, params);

	return {};
};

const categories = async (resource, params) => {
	const {id} = params;
	const queryFilter = {
		_id: ['=', `${id[0]}`],
	};

	const query = {
		filter: queryFilter,
	};

	if (JSON.stringify(query) === '{}') return null;

	return query;
};
