import React, {Fragment} from 'react';
import MuiToolbar from '@material-ui/core/Toolbar';
import {useStyles} from './CategoriesStyles';

import {SaveButton, DeleteButton} from 'react-admin';
import AcceptButton from '../../common/buttons/AcceptButton';
import RejectButton from '../../common/buttons/RejectButton';

const CategoriesEditToolbar = ({
	basePath,
	handleSubmitWithRedirect,
	invalid,
	record,
	resource,
	saving,
}) => {
	const classes = useStyles();
	return (
		<MuiToolbar className={classes.rootButton}>
			{record.status === 'pending' ? (
				<Fragment>
					<AcceptButton record={record} />
					<RejectButton record={record} />
				</Fragment>
			) : (
				<Fragment>
					<SaveButton
						handleSubmitWithRedirect={handleSubmitWithRedirect}
						invalid={invalid}
						saving={saving}
						redirect="list"
						submitOnEnter={true}
					/>
					<DeleteButton basePath={basePath} record={record} resource={resource} />
				</Fragment>
			)}
		</MuiToolbar>
	);
};

export default CategoriesEditToolbar;
