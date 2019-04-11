import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '1%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

class Member extends React.Component{
    render(){
        const { classes, dataMember } = this.props;
        return (
          <React.Fragment>
            <Grid container spacing={40}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs>
                    <Typography component="h6" variant="h6">
                    {dataMember.sectionTitle}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                <Typography style={{ cursor: 'pointer' }}>See all</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Card className={classes.card}>
              <Grid container spacing={16}>
                <Grid item>
                  <Avatar alt="Remy Sharp" src={dataMember.listMember[0].avatar} className={classes.bigAvatar} />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography  gutterBottom variant="subtitle1">
                      {dataMember.listMember[0].level}
                      </Typography>        
                      <Grid container >
                        <Grid item xs={3}>
                          <Typography gutterBottom variant="body2">
                          {dataMember.listMember[0].name}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                        <Typography gutterBottom variant="body2">
                        {dataMember.listMember[0].count} Others.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  
                </Grid>
              </Grid>    
            </Card>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Member);