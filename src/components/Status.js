import React from 'react'

// ui components
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	chip: {
		width: 80,
	},
}))

const Status = ({ status }) => {
	const classes = useStyles();
	let label, color;

	switch (status) {
		case 2:
			label = "Approbed"
			color = "primary"
			break;
		case 3:
			label = "Denied"
			color = "secondary"
			break;
		default:
			label = "Pending"
			color = "default"
	}

	return (
		<Chip
			label={label}
			className={classes.chip}
			variant="outlined"
			color={color}
			size="small"
		/>
	)
}

export default Status