import PropTypes from 'prop-types';

function AddNos(props){
    return(
        <div className='propsValidation'>
            <h1 className='propHeading'> PropTypes Vaalidation of Numbers</h1>
            <h3 className='propItem'>Number:  {props.num1}</h3>
            <h3 className='propItem'>Number:  {props.num2}</h3>
        </div>
    );
}

AddNos.propTypes = {
    num1: PropTypes.number,
    num2: PropTypes.number
};
export default AddNos;