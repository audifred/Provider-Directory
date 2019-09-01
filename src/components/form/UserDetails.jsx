import React from 'react';

export default function UserDetails(props) {
  const { values, handleChange, toNextStep } = props;
  return (
    <div>
      <form className="form">
        <label htmlFor="firstName">
          First Name:
          <input
            name="firstName"
            placeholder="Enter Your First Name"
            autoComplete="off"
            defaultValue={values.firstName}
            onChange={handleChange('firstName')}
            type="text"
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            name="lastName"
            placeholder="Enter Your Last Name"
            autoComplete="off"
            defaultValue={values.lastName}
            onChange={handleChange('lastName')}
            type="text"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            placeholder="Enter Your Email"
            autoComplete="off"
            defaultValue={values.email}
            onChange={handleChange('email')}
            type="text"
          />
        </label>
        <button className="btn-sm" onClick={toNextStep}>
          Continue
        </button>

        <button className="btn-sm">X</button>
      </form>
    </div>
  );
}
