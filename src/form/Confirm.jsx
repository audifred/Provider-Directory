import React from 'react';

export default function Confirm() {
  return (
    <div>
      <form className="confirm">
        <label htmlFor="firstName">
          First Name:
          <input type="text" value="Luis" />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" value="Hernandez" />
        </label>

        <label htmlFor="practiceName">
          Practice Name:
          <input type="text" value="Doctors R' Us" />
        </label>
        <label htmlFor="specialty">
          Specialty:
          <input type="text" value="Surgeon" />
        </label>
      </form>
    </div>
  );
}
