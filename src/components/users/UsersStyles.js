import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	Space: {
		height: 20,
	},
	email: {
		color: '#009688',
	},

	avatar: {
		marginRight: theme.spacing(1),
	},
	root: {
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
		color: '#FFFFFF',
	},
}));
