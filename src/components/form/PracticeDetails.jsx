import React from 'react';

export default function PracticeDetails(props) {
  const { values, handleChange, toNextStep, toPrevStep } = props;
  return (
    <div>
      <form className="form">
        <label htmlFor="practiceName">
          Practice Name:
          <input
            name="practiceName"
            placeholder="Enter Your Practice Name"
            autoComplete="off"
            defaultValue={values.practiceName}
            onChange={handleChange('practiceName')}
            type="text"
          />
        </label>
        <label htmlFor="specialty">
          Specialty:
          <input
            name="specialty"
            placeholder="Enter Your Specialty"
            autoComplete="off"
            defaultValue={values.specialty}
            onChange={handleChange('specialty')}
            type="text"
          />
        </label>
        <button className="btn-sm back" onClick={toPrevStep}>
          Back
        </button>
        <button className="btn-sm" onClick={toNextStep}>
          Continue
        </button>
      </form>
    </div>
  );
}
