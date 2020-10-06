// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Translate } from 'src/context/languages';

// == Import SCSS
import './styles.scss';

// == Composant
const Counter = ({
  counterIncrement,
  counterDecrement,
  counterIncrementByAmount,
  value,
}) => {
  const [incrementAmount, setIncrementAmount] = useState('');

  const handleASYNCCounterIncrementByAmount = () => {
    setTimeout(() => {
      counterIncrementByAmount(incrementAmount);
    }, 1000);
  };

  const handleSetCounterIncrementAmount = (event) => {
    return (
      setIncrementAmount(event.target.value)
    );
  };

  return (
    <div>
      <div className="row">
        <button
          type="button"
          className="button"
          aria-label="Increment value"
          onClick={() => counterIncrement()}
        >
          +
        </button>
        <span className="value">{value}</span>
        <button
          type="button"
          className="button"
          aria-label="Decrement value"
          onClick={() => counterDecrement()}
        >
          -
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(event) => handleSetCounterIncrementAmount(event)}
        />
        <button
          type="button"
          className="button"
          onClick={() => counterIncrementByAmount(incrementAmount)}
        >
          <Translate trId="addAmount" />
        </button>
        <button
          type="button"
          className="button button__asyncButton"
          onClick={() => handleASYNCCounterIncrementByAmount()}
        >
          <Translate trId="addASYNCAmount" />
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counterIncrement: PropTypes.func.isRequired,
  counterDecrement: PropTypes.func.isRequired,
  counterIncrementByAmount: PropTypes.func.isRequired,
  value: PropTypes.number,
};

// == Export
export default Counter;
