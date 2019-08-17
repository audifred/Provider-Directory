import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PracticeDetails from './PracticeDetails';
import Confirm from './Confirm';

export class CreateProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const step = 3;

    switch (step) {
      case 1:
        return <UserDetails />;

      case 2:
        return <PracticeDetails />;

      case 3:
        return <Confirm />;
    }
  }
}

export default CreateProvider;
