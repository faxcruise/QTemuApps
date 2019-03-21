import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: '1%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


class Content extends React.Component{
    render(){
        const { classes } = this.props;
        return (
          <React.Fragment>
            <Typography variant="h5" component="h5">
            {this.props.isiContent.sectionTitle}
            </Typography>

            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h6">
                {this.props.isiContent.contentTitle}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {this.props.isiContent.contentSubTitle}
                </Typography>
                
                {this.props.isiContent.contentText.map(isi => (
                    <Typography>
                    {isi}
                    </Typography>
                ))}
                
              </CardContent>            
            </Card>
          </React.Fragment>
        );
    }
}

export default withStyles(styles)(Content);