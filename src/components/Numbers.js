import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = onClickNumber => {
    return numbers.map(number =>
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber}
        /> 
    );
}

const Numbers = ({ onClickNumber }) => {
    return ( 
        <section className="numbers">
            {
                renderButtons(onClickNumber)
            }
        </section>
     );
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired,
}
 
export default Numbers;