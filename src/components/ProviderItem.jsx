import React from 'react';

export default function ProviderItem(props) {
  return (
    <tr>
      <td>{props.item.firstName}</td>
      <td>{props.item.lastName}</td>
      <td>{props.item.email}</td>
      <td>{props.item.practiceName}</td>
      <td>{props.item.specialty}</td>
      <td className="item-action">...</td>
    </tr>
  );
}
