import React from 'react'
import Grid from '@material-ui/core/Grid';

import { Header } from '../components'

const MainLayout = (WrappedComponent) => {

	return class extends React.Component {
		render() {
			return (
				<React.Fragment>
					<Header/>
					<Grid container justify="center" >
						<Grid item xs={11} sm={10} md={8} lg={8} >
							<WrappedComponent/>
						</Grid>
					</Grid>

				</React.Fragment>
			)
		}
	}
}

export default MainLayout