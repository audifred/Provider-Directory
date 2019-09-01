import React, { Component } from 'react';

export class TableHeader extends Component {
  handleSort = () => {
    this.props.handleSort(this.props.column);
  };
  render() {
    return <th onClick={this.handleSort}>{this.props.value}</th>;
  }
}

export default TableHeader;
