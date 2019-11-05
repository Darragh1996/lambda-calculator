import React, { useState } from "react";
import { numbers } from '../../../data';
import { NumberButton } from './NumberButton';


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {

  const [numberState, setNumbetState] = useState(numbers);

  // STEP 2 - add the imported data to state
  return (
    <div>
      {
        numberState.map(function(num, index){
          return <NumberButton number={num} key={index} aaa={props.onClick}/>
        })
      }
    </div>
  );
};

export {Numbers}
