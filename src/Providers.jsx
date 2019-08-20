import React from 'react';
import ProviderItem from './ProviderItem';

export default function Providers(props) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Practice Name</th>
          <th>Specialty </th>
        </tr>
      </thead>
      <tbody>
        {props.providers.map(item => (
          <ProviderItem key={item.email} item={item} />
        ))}
      </tbody>
    </table>
  );
}
