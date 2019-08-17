import React from 'react';

export default function PracticeDetails() {
  return (
    <div>
      <form className="confirm">
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
