import React from 'react'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		margin: `${theme.spacing(3)}px 0px`,
	},
	title: {
		marginBottom: theme.spacing(1)
	}
}))

const TitleSection = ({ title }) => {
	const classes = useStyles()
	return (
		<div className={classes.root} >
			<Typography variant="h4" className={classes.title} >
				{title}
			</Typography>
			<Divider/>
		</div>
	)
}

export default TitleSection
