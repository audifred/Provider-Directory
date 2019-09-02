import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function ProviderItem(props) {
  console.log(props);

  return (
    <tr>
      <td>{props.item.firstName}</td>
      <td>{props.item.lastName}</td>
      <td>{props.item.email}</td>
      <td>{props.item.practiceName}</td>
      <td>{props.item.specialty}</td>
      <td
        className="item-action"
        onClick={() => props.deleteProvider(props.item)}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </td>
    </tr>
  );
}
