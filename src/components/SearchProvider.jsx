import React from 'react';

export default function SearchProvider(props) {
  const { values, handleChange } = props;
  return (
    <div className="searchBox">
      <label htmlFor="search">
        Filtery by Last Name:
        <input
          name="searchBox"
          placeholder="Search For a Provider"
          defaultValue={values.searchBox}
          onChange={handleChange('searchBox')}
          type="text"
        />
      </label>
    </div>
  );
}
