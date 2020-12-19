import React from 'react';
import Button from '@material-ui/core/Button';


const Square = props => (

<Button 
  className={`${props.winnerClass} square`}
  color="secondary"
  variant="outlined"   
  style={{
    borderRadius: 250,
    width: "100px",
    height:"100px",
    fontSize: "50px",
    padding: "18px",
        }}
  onClick={props.onClick}>

  {props.value}
</Button>

);

export default Square;