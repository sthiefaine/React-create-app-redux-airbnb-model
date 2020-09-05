// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import { Translate } from 'src/context/languages';

// == Import SCSS
import './styles.scss';

// == Composant
const Counter = ({
  counterIncrement,
  counterDecrement,
  setCounterIncrementAmount,
  counterIncrementByAmount,
  value,
  counterIncrementValue,
}) => {
  const handleCounterIncrement = () => {
    return (
      counterIncrement()
    );
  };

  const handleCounterDecrement = () => {
    return (
      counterDecrement()
    );
  };

  const handleCounterIncrementByAmount = () => {
    return (
      counterIncrementByAmount()
    );
  };

  const handleASYNCCounterIncrementByAmount = () => {
    setTimeout(() => {
      counterIncrementByAmount();
    }, 1000);
  };

  const handleSetCounterIncrementAmount = (event) => {
    return (
      setCounterIncrementAmount(event.target.value)
    );
  };

  return (
    <div>
      <div className="row">
        <button
          type="button"
          className="button"
          aria-label="Increment value"
          onClick={() => handleCounterIncrement()}
        >
          +
        </button>
        <span className="value">{value}</span>
        <button
          type="button"
          className="button"
          aria-label="Decrement value"
          onClick={() => handleCounterDecrement()}
        >
          -
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={counterIncrementValue}
          onChange={(event) => handleSetCounterIncrementAmount(event)}
        />
        <button
          type="button"
          className="button"
          onClick={() => handleCounterIncrementByAmount()}
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
  setCounterIncrementAmount: PropTypes.func.isRequired,
  counterDecrement: PropTypes.func.isRequired,
  counterIncrementByAmount: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

// == Export
export default Counter;
