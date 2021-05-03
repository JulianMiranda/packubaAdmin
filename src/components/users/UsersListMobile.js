import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {linkToRecord, ReferenceField} from 'react-admin';

import AvatarField from './AvatarField';

const useStyles = makeStyles({
	root: {
		width: '100vw',
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
	},
	inline: {
		display: 'inline',
	},
});

const UsersMobileList = ({basePath, data, ids, loading, total}) => {
	console.log(loading, 'loading');
	console.log(total, 'total');
	const classes = useStyles();
	return (
		(loading || total > 0) && (
			<List className={classes.root}>
				{ids.map((id) => (
					<Link to={linkToRecord(basePath, id)} className={classes.link} key={id}>
						<ListItem key={id} button component={Link} to={`/users/${id}`}>
							<ListItemAvatar>
								<ReferenceField
									record={data[id]}
									source="id"
									reference="users"
									basePath={basePath}
									linkType={false}
								>
									<AvatarField size={35} />
								</ReferenceField>
							</ListItemAvatar>
							<ListItemText
								primary={data[id].name}
								secondary={data[id].email}
								secondaryTypographyProps={{noWrap: true}}
							/>
						</ListItem>
					</Link>
				))}
			</List>
		)
	);
};

UsersMobileList.propTypes = {
	basePath: PropTypes.string,
	data: PropTypes.object,
	hasBulkActions: PropTypes.bool.isRequired,
	ids: PropTypes.array,
	leftAvatar: PropTypes.func,
	leftIcon: PropTypes.func,
	linkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
	onToggleItem: PropTypes.func,
	primaryText: PropTypes.func,
	rightAvatar: PropTypes.func,
	rightIcon: PropTypes.func,
	secondaryText: PropTypes.func,
	selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

UsersMobileList.defaultProps = {
	linkType: 'edit',
	hasBulkActions: false,
	selectedIds: [],
};

export default UsersMobileList;
