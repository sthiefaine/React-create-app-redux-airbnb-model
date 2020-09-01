// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './styles.scss';

// == Composant
const Counter = ({
  counterIncrement,
  setCounterIncrementAmount,
  counterDecrement,
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
      setCounterIncrementAmount(parseInt(event.target.value, 10))
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
          Add Amount
        </button>
        <button
          type="button"
          className="button button__asyncButton"
          onClick={() => handleASYNCCounterIncrementByAmount()}
        >
          Add Async
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
  counterIncrementValue: PropTypes.number,

};

Counter.defaultProps = {
  counterIncrementValue: 0,
};

// == Export
export default Counter;
