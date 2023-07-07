import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

function GridBox(props) {
    const [checkboxstate, setcheckBoxState] = useState(['0','0','0','0','0','0','0','0','0']);
    const [checkcount, setCheckCount] = useState(0);

    const HanldeCheck = (index) => {
        let nextcheckboxstate = [];
        for (let i = 0; i< checkboxstate.length;i++){
            if (index === i){
                if ( checkboxstate[i] === '0'){
                    nextcheckboxstate.push("X");
                    setCheckCount(checkcount+1);
                    props.sendData(checkcount+1);
                } else {
                    nextcheckboxstate.push('0');
                    setCheckCount(checkcount-1);
                    props.sendData(checkcount-1);
                }
            
            } else {
                nextcheckboxstate.push(checkboxstate[i])
            }
        }
          setcheckBoxState(nextcheckboxstate);
          
          console.log(index, checkboxstate)
        };

    return (
        <>
          <h3> Selected cell count  </h3>
          <div>
            <Square value={checkboxstate[0]} onSquareClick={() => HanldeCheck(0)} />
            <Square value={checkboxstate[1]} onSquareClick={() => HanldeCheck(1)} />
            <Square value={checkboxstate[2]} onSquareClick={() => HanldeCheck(2)} />
          </div>
          <div>
            <Square value={checkboxstate[3]} onSquareClick={() => HanldeCheck(3)} />
            <Square value={checkboxstate[4]} onSquareClick={() => HanldeCheck(4)} />
            <Square value={checkboxstate[5]} onSquareClick={() => HanldeCheck(5)} />
          </div>
          <div>
            <Square value={checkboxstate[6]} onSquareClick={() => HanldeCheck(6)} />
            <Square value={checkboxstate[7]} onSquareClick={() => HanldeCheck(7)} />
            <Square value={checkboxstate[8]} onSquareClick={() => HanldeCheck(8)} />
          </div>
        </>
      );
  }

  export default GridBox;