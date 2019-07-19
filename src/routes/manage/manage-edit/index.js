import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateManage  } from '../../../redux/actions'

// ui components
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';

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
  },
  input: {
  	marginBottom: theme.spacing(2),
  	width: 300
  },
  table: {
  	marginBottom: theme.spacing(2)
  },
  button: {
  	marginTop: theme.spacing(1)
  }
}))

const ManageKeyEdit = ({ manage: { data, status }, onUpdateManage }) => {
	const classes = useStyles()
	const [changeManage, setChangeManage] = React.useState(false)
	const [type, setChangeType] = React.useState("")
	const [checked, setChecked] = React.useState("")

	React.useEffect(() => {
		if (data.type !== undefined && type === "") setChangeType(data.type)

		if (data.sensitivity !== undefined && checked === "" ) setChecked(data.sensitivity)
  });

	const handleChangeManage = () => {
		setChangeManage(true)
  }

  const handleSubmit = e => {
		e.preventDefault()

		const {
      name: {
        value: name
      },
      description: {
        value: description
      },
      type: {
        value: type
      }
    } = e.target.elements

    const dataManage = {
    	name,
    	description,
    	type,
    	sensitivity: checked,
    	id: data.id,
    }

    if (changeManage) onUpdateManage(dataManage, data.id)
  }

	const handleCancel = () => setChangeManage(false)

	const handleChangeType = (e, data) => {
		setChangeType(e.target.value)
		handleChangeManage()
  }

	const handleChangeChecked = (e) => {
		setChecked(!checked)
  }

	return (
		<Paper className={classes.paper} >
			<form autoComplete="off" onSubmit={(e) => handleSubmit(e)} >
				<div className={classes.headerDetail} >
					<Typography variant="h6" >
						Edit Information
					</Typography>
					<div>
						{ status.loading.post && <CircularProgress color="primary" style={{ height: 20, width: 20 }} /> }
						<Button
							color="secondary"
							size="small"
							component={Link}
							to="/manage"
							onClick={() => handleCancel()}
							disabled={status.loading.post}
						>
							Cancel
						</Button>

						<Button
							color="primary"
							disabled={!changeManage || status.loading.post}
							variant="outlined"
							size="small"
							type="submit"
						>
							<SaveIcon/>
							Save
						</Button>
					</div>
				</div>

				<div className={classes.detail} >
					<Typography variant="subtitle2" >
						Key name
					</Typography>
					<TextField
		        id="multiline-key-name"
		        className={classes.input}
		        required
	          type="text"
	          name="name"
	          margin="dense"
	          variant="outlined"
	          tabIndex="0"
	          defaultValue={data.name}
	          key={`name-${data.name}`}
	          onChange={() => handleChangeManage()}
		      >
		      </TextField>
					<br/>
					<Typography variant="subtitle2" >
						Description
					</Typography>
					<TextField
		        id="multiline description"
		        className={classes.input}
		        required
	          type="text"
	          name="description"
	          margin="dense"
	          variant="outlined"
	          tabIndex="0"
	          defaultValue={data.description}
	          key={`description-${data.description}`}
	          onChange={() => handleChangeManage()}
		        multiline
		        rows={2}
		      >
		      </TextField>

					<br/>
					<Typography variant="subtitle2" >
						Type
					</Typography>
					<TextField
		        id="filled-select-type"
		        select
		        className={classes.input}
		        SelectProps={{
		          MenuProps: {
		            className: classes.menu,
		          },
		        }}
		        margin="dense"
		        required
	          name="type"
	          value={type}
	          key={`type-${type}`}
	          onChange={(e,data) => handleChangeType(e,data)}
	          variant="outlined"
	          tabIndex="0"
		      >
	          <MenuItem key={1} value="Easy">
	            Easy
	          </MenuItem>
	          <MenuItem key={2} value="Regular">
	            Regular
	          </MenuItem>
	          <MenuItem key={3} value="Hard">
	            Hard
	          </MenuItem>
		      </TextField>
		      <br/>
		      <FormControlLabel
		        control={
		          <Checkbox
		          	key={`sensitivity-${checked}`}
		            checked={checked}
		            onChange={() => handleChangeChecked()}
		            color="primary"
		          />
		        }
		        label="Is this personal data?"
		      />
				</div>
			</form>
			<DataTable/>
			<Button
				color="primary"
				size="small"
				variant="outlined"
				className={classes.button}
			>
				<AddIcon/> Add posible value
			</Button>
		</Paper>
	)
}

const mapDispatchToProps = dispatch => {
  return {
  	onUpdateManage(data, id) {
  		dispatch(updateManage(data, id))
  	}
  }
}

const mapStateToProps = ({
  manage,
}) => ({
  manage,
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageKeyEdit)
