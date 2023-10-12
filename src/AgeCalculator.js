import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthdateObj = new Date(birthdate);
    const diff = today - birthdateObj;
    const ageDate = new Date(diff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <label htmlFor="birthdate">Enter Your Date of Birth</label>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is {age} years.</p>}
    </div>
  );
}

export default AgeCalculator;