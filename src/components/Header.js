import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import withRoot from '../withRoot.js'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    textDecoration: 'none',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLinkStyle: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
    margin: '0px 16px',
    transition: 'border .3s',
    color: theme.palette.primary,
    '&:hover': {
      background: theme.palette.primary,
      color: 'white',
      transition: 'background .3s'
    },
  },
  rootTolbar: {
    padding: 0,
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        component={NavLink}
        to="/"
        exact
        activeStyle={{ color: '#2196F3' }}
      >
        <p>Home</p>
      </MenuItem>
      <MenuItem
        component={NavLink}
        to="/review"
        exact
        activeStyle={{ color: '#2196F3' }}
      >
        <p>Review</p>
      </MenuItem>
      <MenuItem
        component={NavLink}
        to="/requests"
        exact
        activeStyle={{ color: '#2196F3' }}
      >
        <p>Requests</p>
      </MenuItem>
      <MenuItem
        component={NavLink}
        to="/manage"
        exact
        activeStyle={{ color: '#2196F3' }}
      >
        <p>Manage</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit" >
        <Grid container justify="center" >
          <Grid item xs={11} sm={10} md={8} lg={8} >            
            <Toolbar classes={{ root: classes.rootTolbar }} >
              <Typography className={classes.title} variant="h6" component={Link} to="/" noWrap>
                Data Gate
              </Typography>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button
                  component={NavLink}
                  to="/"
                  exact
                  activeStyle={{ color: '#2196F3' }}
                >
                  Home
                </Button>
                <Button
                  component={NavLink}
                  to="/review"
                  exact
                  activeStyle={{ color: '#2196F3' }}
                >
                  Review
                </Button>
                <Button
                  component={NavLink}
                  to="/requests"
                  exact
                  activeStyle={{ color: '#2196F3' }}
                >
                  Requests
                </Button>
                <Button
                  component={NavLink}
                  to="/manage"
                  exact
                  activeStyle={{ color: '#2196F3' }}
                >
                  manage
                </Button>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  edge="start"
                  aria-label="Open drawer"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  className={classes.menuButton}
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default withRoot(NavBar)