import { useState } from 'react';

import './App.css';

export default function App() {
  const [workTime, setWorkTime] = useState({
    hoursPerWeek: '',
    weeksPerYear: '',
  });
  const [hourlyWage, setHourlyWage] = useState('');
  const [annualIncome, setAnnualIncome] = useState('5');

  function formatHourlyWage() {
    return `$${hourlyWage}`;
  }

  function validateInput() {
    if (
      workTime.hoursPerWeek === '' ||
      workTime.weeksPerYear === '' ||
      hourlyWage === ''
    ) {
      alert('Missing Inputs');
      return false;
    }

    return true;
  }

  function buttonClickHandler() {
    if (annualIncome !== '') {
      setWorkTime({
        hoursPerWeek: '',
        weeksPerYear: '',
      });
      setHourlyWage('');
      setAnnualIncome('');

      return;
    }
    const result = validateInput();
    result &&
      setAnnualIncome(
        `$${workTime.hoursPerWeek * workTime.weeksPerYear * hourlyWage}`
      );
  }

  return (
    <div className="app">
      <div className="incomeGenerator">
        <div className="header">
          <h2>Annual Income Calculator</h2>
          <button onClick={() => buttonClickHandler()}>
            {annualIncome ? 'CLEAR' : 'CALCULATE'}
          </button>
        </div>
        <div className="body">
          <div className="workingTime__section">
            <div className="workingTime__section-input">
              <label htmlFor="">Working hours per week: </label>
              <input
                type="text"
                value={workTime.hoursPerWeek}
                onChange={(e) =>
                  setWorkTime({
                    ...workTime,
                    hoursPerWeek: e.target.value,
                  })
                }
              />
            </div>
            <div className="workingTime__section-input">
              <label htmlFor="">Working weeks per year: </label>
              <input
                type="text"
                value={workTime.weeksPerYear}
                onChange={(e) =>
                  setWorkTime({
                    ...workTime,
                    weeksPerYear: e.target.value,
                  })
                }
              />
            </div>
            <div className="workingTime__section-input">
              <label htmlFor="">Hourly wage : </label>
              <input
                type="text"
                value={hourlyWage}
                onChange={(e) => setHourlyWage(e.target.value)}
              />
            </div>
          </div>
          <div className="wage__section">
            <div className="wage__section-input">
              <label htmlFor="">Annual Income: </label>
              <p>{annualIncome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
