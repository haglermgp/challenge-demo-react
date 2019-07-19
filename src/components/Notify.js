import React from 'react';
import PropTypes from 'prop-types'
import Notification from 'rc-notification';
import withRoot from '../withRoot'

// ui
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar';
import Icon from '@material-ui/core/Icon';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class ModalNotify extends React.Component {
	state = {
    open: true,
  }

  handleClose = () => {
    this.setState({ open: false });
  }

	render () {
    const { type, message, classes } = this.props

    const typeColor = classes[`${type}`]
    let typeIcon, autoHideDuration;

    switch (type) {
      case 'success':
        typeIcon = 'check_circle'
        autoHideDuration = 3000
        break;
      case 'error':
        typeIcon = 'cancel'
        autoHideDuration = 4000
        break;
      default:
        typeIcon = 'info'
        autoHideDuration = 3000
    }

		return (
			<Snackbar
	      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
	      open={this.state.open}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        autoHideDuration={autoHideDuration}
	      onClose={this.handleClose}
	      message={<span id="message-id" className={classes.align} > <Icon className={typeColor}>{typeIcon}</Icon> &nbsp;&nbsp; {message}</span>}
	    />
		)
	}
}

const styles = theme => ({
  success: {
    color: theme.palette.primary.main,
  },
  error: {
    color: theme.palette.secondary.main,
  },
  info: {
    color: 'white',
  },
  align: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

ModalNotify.propTypes = {
  classes: PropTypes.object.isRequired,
}

const NotifyComponent = withRoot(withStyles(styles)(ModalNotify))

function Notify (type, message) {
  return notification.notice({
    content: <NotifyComponent type={type} message={message} />,
    duration: null,
  });
}

export default Notify