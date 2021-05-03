import {createMuiTheme} from '@material-ui/core/styles';
import {teal} from '@material-ui/core/colors';

export default createMuiTheme({
	palette: {
		type: 'dark', // Switching the dark mode on is a single property value change.
		primary: teal,
		secondary: {main: '#303030'},
		error: {main: '#ff535d'},
	},
});
