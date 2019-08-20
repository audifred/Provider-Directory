import React, { Component } from 'react';
import CreateProvider from './form/CreateProvider';
import Providers from './Providers';
import directory from './data/directory.json';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.addProvider = this.addProvider.bind(this);

    this.state = {
      providers: directory
    };
  }

  addProvider(provider) {
    const newItem = {
      firstName: provider.firstName,
      lastName: provider.lastName,
      email: provider.email,
      practiceName: provider.practiceName,
      specialty: provider.specialty
    };

    this.setState({
      providers: [newItem, ...this.state.providers]
    });
  }

  render() {
    return (
      <React.Fragment>
        <CreateProvider addProvider={this.addProvider} />
        <Providers providers={this.state.providers} />
      </React.Fragment>
    );
  }
}
