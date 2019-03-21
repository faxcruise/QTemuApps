import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class NavBar extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                <Toolbar>
                    <Toolbar>
                      <Typography variant="headline" color="inherit">
                      {this.props.namaApps}
                      </Typography>
                    </Toolbar>


                    {this.props.menu.map(oneMenu => (                      
                      <Button color="inherit" href={oneMenu.location} key={oneMenu.name}>{oneMenu.name}</Button>
                    ))}
                    
                    
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                    </Typography>
                    

                    <Button color="inherit">Login</Button>
                </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(NavBar);