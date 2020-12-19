import React from 'react';
import Button from '@material-ui/core/Button';


const Square = props => (

<Button 
  className={`${props.winnerClass} square`}
  color="secondary"
  variant="outlined"  
  style={{
    borderRadius: 250,
    width: "80px",
    height:"80px",
    fontSize: "40px",
    padding: "18px",
    border: '2px solid'
        }}
  onClick={props.onClick}>

  {props.value}
</Button>

);

export default Square;