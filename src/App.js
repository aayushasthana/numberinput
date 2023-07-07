import React, { useState } from 'react';
import './App.css';
import IncrementDecrement from './components/incdec/';
import NumberOutput from './components/numberoutput';
import CellSelect from './components/cellselect';
import GridBox from './components/gridbox';

function App() {

  const [outputnumber1, setOutputNumber1] = useState(0);
  function sendOutputNumber1(inputcomp)  {
    
    setOutputNumber1(inputcomp);
  }

  const [outputnumber2, setOutputNumber2] = useState(0);
  function sendOutputNumber2(inputcomp)  {
    
    setOutputNumber2(inputcomp);
  }

  const [outputnumber3, setOutputNumber3] = useState(0);
  function sendOutputNumber3(inputcomp)  {
    
    setOutputNumber3(inputcomp);
  }
  return (
    <div className="App">
      <h1> Number Input Output Controls</h1>
      <table>
        <thead>
          <tr>
            <th> Control </th> <th> Output  </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><IncrementDecrement sendData={sendOutputNumber1} number={110} /></th> 
            <th><NumberOutput num={outputnumber1}/></th>
          </tr>

          <tr>
            <th><CellSelect sendData={sendOutputNumber2} /> </th>
            <th><NumberOutput num={outputnumber2}/></th>
          </tr>

          <tr>
            <th><GridBox sendData={sendOutputNumber3} /></th>
            <th><NumberOutput num={outputnumber3}/></th>
            
          </tr>

        </tbody>
      </table>
      
    </div>
  );
}

export default App;
