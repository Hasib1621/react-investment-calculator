import { useState } from 'react';
import classes from './UserInput.module.css';

const initialUserInput = {
  'current-savings': 1000,
  'yearly-contribution': 200,
  'expected-return': 3,
  duration: 5,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitCalculateHandler = (e) => {
    e.preventDefault();
    props.calculate(userInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: +value,
      };
    });
  };

  return (
    <form className={classes.form} onSubmit={submitCalculateHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            value={userInput['current-savings']}
            onChange={(e) =>
              inputChangeHandler('current-savings', e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            value={userInput['yearly-contribution']}
            onChange={(e) =>
              inputChangeHandler('yearly-contribution', e.target.value)
            }
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor='expected-return'>Expected Profit (%, per year)</label>
          <input
            type='number'
            id='expected-return'
            value={userInput['expected-return']}
            onChange={(e) =>
              inputChangeHandler('expected-return', e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={userInput['duration']}
            onChange={(e) => inputChangeHandler('duration', e.target.value)}
          />
        </p>
      </div>
      <p className={classes['actions']}>
        <button
          type='reset'
          className={classes['buttonAlt']}
          onClick={() => setUserInput(initialUserInput)}
        >
          Reset
        </button>
        <button type='submit' className={classes['button']}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
