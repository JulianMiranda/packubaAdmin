export const compareFilterSub = async (filter) => {
	if (JSON.stringify(filter) === '{}') return null;
	else {
		const object = {
			category: ['=', `${filter.category}`],
		};
		return object;
	}
};
