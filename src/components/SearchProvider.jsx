import React from 'react';

export default function SearchProvider(props) {
  const { values, handleChange } = props;
  return (
    <div>
      <input
        name="searchBox"
        placeholder="Search For a Provider"
        defaultValue={values.searchBox}
        onChange={handleChange('searchBox')}
        type="text"
      />
    </div>
  );
}
