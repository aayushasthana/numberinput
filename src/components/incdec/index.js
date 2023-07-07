import React, { useState } from 'react';
  
function IncrementDecrement(props) {

    const [inputnumber, setNumber] = useState(props.number);

return (

        <div>
            <h3>Increment Decrement Integer </h3>
            <h6> Initial value: {props.number}  </h6>
            <button onClick={() => { setNumber(inputnumber - 1); props.sendData(inputnumber-1)}}> - </button>
            <button onClick={() => { setNumber(inputnumber + 1); props.sendData(inputnumber+1)}}> + </button>
        </div>

    );
}

export default IncrementDecrement;