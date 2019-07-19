import React from 'react'
import { Helmet } from 'react-helmet'

// ui components
import Grid from '@material-ui/core/Grid';

// components
import { TitleSection } from '../../components'

const Home = () => (
	<React.Fragment>
		<Helmet> <title>Home | Code Challenge </title> </Helmet>
		<TitleSection title="Home" />
		<Grid container >
			<Grid item xs={12} sm={12} md={4} >
				
			</Grid>
			<Grid item xs={12} sm={12} md={8} >
			</Grid>
		</Grid>
	</React.Fragment>
)

export default Home