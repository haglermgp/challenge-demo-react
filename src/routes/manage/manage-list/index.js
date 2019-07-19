import React from 'react'
import { connect } from 'react-redux'
import { selectManage  } from '../../../redux/actions'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	paper: {
    marginBottom: theme.spacing(2),
  },
}))

const ManageKeyList = ({ manageList, onSelectManage }) => {
	const classes = useStyles()
	const [select, setSelect] = React.useState(0)

	const handleSelect = (id) => {
		onSelectManage(id)
		setSelect(id)
	}

	return (
		<React.Fragment>
			<Paper className={classes.paper}>
	      <MenuList>
			    { manageList.data.map(item => (
			        <MenuItem
			        	key={item.id}
			        	selected={select === item.id}
			        	onClick={() => handleSelect(item.id) }
			        >
			        	{item.name}
			        </MenuItem>
		    	))}

			    { manageList.data.length === 0 && <CircularProgress className={classes.progress} /> }
	      </MenuList>
	    </Paper>
	    <Button color="primary" variant="outlined" size="small" >
	    	<AddIcon/> Add key
	    </Button>
		</React.Fragment>
	)
}

const mapDispatchToProps = dispatch => {
  return {
  	onSelectManage(id) {
  		dispatch(selectManage(id))
  	}
  }
}

const mapStateToProps = ({
  manageList,
}) => ({
  manageList,
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageKeyList)
