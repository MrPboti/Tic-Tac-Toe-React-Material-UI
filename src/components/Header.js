import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor: "#161b22"}} position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Tic Tac Toe
          </Typography>
          <Button href="https://github.com/MrPboti/Tic-Tac-Toe-React-Material-UI" color="inherit">
            github
          </Button>
        </Toolbar>
      </AppBar>
      <br></br>
    </div>
  );
}
