import React from "react";
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 5,
    maxWidth: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class Header extends React.Component{
    render(){
        const { classes, contentHeader } = this.props;
        
        return (
          <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={16}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="https://hacktiv8.com/img/fox.png__vzu2vhp2VRX%2Bewg7J0bPlaAa9e377ae39495073d0e66db163fc8d9b" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs>
                  <Typography gutterBottom component="h6" variant="h6">
                      {contentHeader.title}
                    </Typography>
                    <Typography gutterBottom color="textSecondary">
                    Location:  {contentHeader.location}
                    </Typography>
                  <Typography gutterBottom color="textSecondary">
                    Members: {contentHeader.member}
                  </Typography>
                  <Typography gutterBottom color="textSecondary">
                    Organizers:  {contentHeader.organzer}
                  </Typography>
                  </Grid>
                  
                  <Grid item>
                    <Button variant="contained" color="primary" className={classes.button} href={contentHeader.linkPage}>
                      Join Us
                    </Button>
                  </Grid>
                </Grid>
                
              </Grid>
            </Grid>
          </Paper>
          </div>
        );
    }
}

export default withStyles(styles)(Header);