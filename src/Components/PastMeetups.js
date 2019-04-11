import React from "react";
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
    margin: '1%'
  },
  mainStyle: {
    paddingRight: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    marginBottom: 5,
    maxWidth: '100%',
  },
});

class PastMeetups extends React.Component{
    render(){
      const { classes} = this.props;
    
    return (
        <React.Fragment>
            <Grid container spacing={40}>
                <Grid item xs={12} sm container>
                    <Grid item xs justify="space-evenly">
                        <Typography component="h6" variant="h6">
                            {this.props.pastmeetups[0].sectionTitle}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ cursor: 'pointer' }}>See all</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Card className={classes.card}>
            <CardContent>
                <Grid container spacing={40} justify="space-evenly">
                    {this.props.pastmeetups[0].listMeetUps.map(pastmeetup => (
                    <Grid item key={pastmeetup.id}>
                        <Card>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="subtitle1">
                                {pastmeetup.eventdate}
                            </Typography>
                            <Divider />
                            <Typography gutterBottom component="p">
                                {pastmeetup.id} JakartaJS April Meetup with
                            </Typography>
                            <Typography  gutterBottom component="p">{pastmeetup.company}</Typography>
                            </CardContent>
                            <CardContent>
                            <Typography gutterBottom color="textSecondary">
                                {pastmeetup.count}  Went
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" variant="contained" className={classes.button}>
                            View
                            </Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </CardContent>
            </Card>
        </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PastMeetups);