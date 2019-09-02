import React, { Component } from 'react';
import ProviderItem from './ProviderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

export default class Providers extends Component {
  render() {
    const { providers, sortDirection, deleteProvider } = this.props;
    const providersList = providers.map(item => (
      <ProviderItem
        deleteProvider={deleteProvider}
        key={item.email}
        item={item}
      />
    ));
    const sortOrder = sortDirection.startsWith('-') ? 'sort-desc' : 'sort-asc';

    return (
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            {this.props.headers.map(header => (
              <th
                key={header.prop}
                onClick={() => this.props.handleSort(header.prop)}
              >
                {header.name}
                {sortDirection === header.prop ||
                sortDirection === `-${header.prop}` ? (
                  sortOrder === 'sort-asc' ? (
                    <FontAwesomeIcon icon={faSortUp} />
                  ) : (
                    <FontAwesomeIcon icon={faSortDown} />
                  )
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{providersList}</tbody>
      </table>
    );
  }
}
