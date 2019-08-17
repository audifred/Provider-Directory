import React from 'react';

export default function UserDetails() {
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
      </form>
    </div>
  );
}
