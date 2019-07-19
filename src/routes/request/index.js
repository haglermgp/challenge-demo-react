import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { loadRequestsList  } from '../../redux/actions'

// ui components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// components
import DataTable from './DataTable.js'
import AppBarRequest from './AppBarRequest.js'
import { TitleSection } from '../../components'

class RequestsList extends React.Component {

	componentDidMount() {
		const { requestsList, onLoadRequestsList } = this.props;

		if (requestsList.data.length === 0) onLoadRequestsList()
	}

	render() {
		const { requestsList } = this.props

		return (
			<React.Fragment>
				<Helmet> <title>Request | Code Challenge </title> </Helmet>
				<TitleSection title="Requests" />
				<Grid container >
					<Grid item xs={12} >
						<Paper>
							<AppBarRequest/>
							<DataTable data={requestsList} />
						</Paper>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
  	onLoadRequestsList() {
  		dispatch(loadRequestsList())
  	},
  }
}

const mapStateToProps = ({
  requestsList,
}) => ({
  requestsList,
})


export default connect(mapStateToProps, mapDispatchToProps)(RequestsList)
