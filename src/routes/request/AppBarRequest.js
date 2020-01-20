import React from 'react'
import { connect } from 'react-redux'
import { loadRequestsList  } from '../../redux/actions'

// ui components
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import grey from '@material-ui/core/colors/grey';

const greyDivider = grey[200];

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    borderBottom: `1px solid ${greyDivider}`,
  },
}));

const AppBarRequest = ({ onLoadRequestsList }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);

    const params = newValue === 0 ? {} : { status: newValue }

    onLoadRequestsList(params)
  }

	return (
    <Tabs
    	value={value}
    	onChange={handleChange}
    	indicatorColor="primary"
    	textColor="primary"
    	className={classes.root}
    >
      <Tab label="All" />
      <Tab label="Pending" />
      <Tab label="Approved" />
      <Tab label="Denied" />
    </Tabs>
	)
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadRequestsList(params) {
      dispatch(loadRequestsList(params))
    }
  }
}

export default connect(() => {return {}}, mapDispatchToProps)(AppBarRequest)
