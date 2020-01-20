import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// ui components
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

// components
import DataTable from './DataTable.js'

const useStyles = makeStyles(theme => ({
	paper: {
    padding: theme.spacing(2),
  },
  headerDetail: {
  	display: 'flex',
  	justifyContent: 'space-between'
  },
  detail: {
  	margin: `${theme.spacing(2)}px 0px`,
  },
  sectionTable: {
  	margin: `${theme.spacing(4)}px 0px`,
  },
  titleTable: {
  	backgroundColor: theme.palette.primary.main,
  	padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  	color: 'white',
  }
}))

const ManageKeyDetail = ({ manage: { data } }) => {
	const classes = useStyles()

	return (
		<Paper className={classes.paper} >
			{
				data.name !== undefined ? (
					<>
						<div className={classes.headerDetail} >
							<Typography variant="h6" >
								{data.name}
							</Typography>
							<Button
								color="primary"
								variant="outlined"
								size="small"
								component={Link}
								to="/manage/edit"
							>
								<EditIcon/> Edit
							</Button>
						</div>

						<div className={classes.detail} >
							<Typography variant="subtitle2" >
								Description
							</Typography>
							<Typography variant="body2" >
								{data.description}
							</Typography>
							<br/>
							<Typography variant="subtitle2" >
								Type
							</Typography>
							<Typography variant="body2" >
								{data.type}
							</Typography>
							<br/>
							<Typography variant="subtitle2" >
								Sensitivity
							</Typography>
							<Typography variant="body2" >
								{ data.sensitivity ? "The sensitivity data is able" : "The sensitivity data is disabled" }
							</Typography>
						</div>
						<DataTable data={data.posibleValues} />
					</>
				) : (
					<p align="center" >*No Item select</p>
				)
			}
		</Paper>
	)
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const mapStateToProps = ({
  manage,
}) => ({
  manage,
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageKeyDetail)
