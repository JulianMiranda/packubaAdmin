import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
	closeButton: {
		zIndex: 1000001,
		position: 'absolute',
		top: 10,
		right: 10,
		paddingRight: 2,
		height: 65,
		borderRadius: '50%',
		backgroundColor: '#0096884d',
	},
	mapContainer: {
		position: 'absolute',
		height: '93%',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 1000000,
	},
});
