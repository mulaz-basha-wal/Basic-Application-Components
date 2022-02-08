import PropTypes from 'prop-types';
import { useState } from 'react';

function MiniCalculator(props){
    let [result, setResult]=useState(0);

    function doOperation(){
        if (props.operation==="Add") {
            setResult(props.num1 + props.num2)
        }else if (props.operation==="Sub") {
            setResult(props.num1 - props.num2);
        }else if (props.operation==="Mul") {
            setResult(props.num1 * props.num2);
        }else if (props.operation==="Div") {
            setResult(props.num1 / props.num2);
        }
    }
    

    return(
        <div className='MiniCalculator'>
            <h1 className='propHeading'> MiniCalculator</h1>
            <div>
                <h3 className='minCalItem'>Num_1</h3>
                <h3 className='minCalItem'>?</h3>
                <h3 className='minCalItem'>Num_2</h3>
                <h3 className='minCalItem'>Result</h3>
                
            </div>
            <div>
                <h3 className='minCalItem'>{props.num1}</h3>
                <h3 className='minCalItem'>{props.operation}</h3>
                <h3 className='minCalItem'>{props.num2}</h3>
                <h3 className='minCalItem'>{result}</h3>
            </div>
            <button className='getResult' onClick={doOperation}>Get Result</button>
        </div>
    );
}

MiniCalculator.propTypes = {
    num1: PropTypes.number,
    num2: PropTypes.number,
    operation: PropTypes.string
};
export default MiniCalculator;