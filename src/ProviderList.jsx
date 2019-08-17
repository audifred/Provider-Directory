import React from 'react';
import directory from './data/directory.json';

export default function ProviderList() {
  const providers = directory;
  const item = providers.map(item => (
    <tr key={item.email} style={{ textAlign: 'center' }}>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>{item.specialty}</td>
      <td>{item.practice_name}</td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Practice Name</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>{item}</tbody>
      </table>
    </div>
  );
}
