import React from 'react';

export default function Confirm(props) {
  const { values, handleSubmit, toPrevStep } = props;
  return (
    <div>
      <form className="confirm">
        <label htmlFor="firstName">
          First Name:
          <input type="text" value={values.firstName} readOnly />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" value={values.lastName} readOnly />
        </label>

        <label htmlFor="practiceName">
          Practice Name:
          <input type="text" value={values.practiceName} readOnly />
        </label>
        <label htmlFor="specialty">
          Specialty:
          <input type="text" value={values.specialty} readOnly />
        </label>

        <button onClick={toPrevStep}>Edit Entry</button>
        <button type="submit" onClick={handleSubmit}>
          Add Provider
        </button>
      </form>
    </div>
  );
}
