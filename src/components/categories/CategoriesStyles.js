import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	form: {
		display: 'block',
		marginTop: '1em',
		width: '19em',
	},
	card: {
		display: 'block',
		marginTop: '1em',
		marginLeft: '5em',
		width: '45em',
	},
	Space: {
		height: 40,
	},
	Image: {
		width: '18em',
	},

	icon: {paddingRight: '0.5em'},
	link: {
		display: 'inline-flex',
		alignItems: 'center',
	},
	root: {
		display: 'flex',
	},
	list: {
		flexGrow: 1,
		transition: theme.transitions.create(['all'], {
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 0,
	},
	listWithDrawer: {
		marginRight: 400,
	},
	drawerPaper: {
		zIndex: 100,
	},
	rootList: {
		paddingTop: 40,
	},
	title: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: '1em',
	},
	formList: {
		[theme.breakpoints.up('xs')]: {
			width: 400,
		},
		[theme.breakpoints.down('xs')]: {
			width: '100vw',
			marginTop: -30,
		},
	},
	inlineField: {
		display: 'inline-block',
		width: '50%',
	},
	rootButton: {
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		justifyContent: 'space-between',
	},
	name: {display: 'inline-block'},
	image: {display: 'inline-block', marginLeft: 32},
}));
