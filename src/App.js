import React, { Component, Fragment } from 'react';
import CreateProvider from './components/form/CreateProvider';
import Header from './components/Header';
import SearchProvider from './components/SearchProvider';
import Providers from './components/Providers';
import Toggle from './components/Toggle';
import directory from './data/directory.json';
import sortBy from 'sort-by';

import './App.css';

export default class App extends Component {
  state = {
    providers: directory,
    columnToSort: 'lastName',
    searchBox: ''
  };

  addProvider = provider => {
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
  };

  handleChange(input) {
    console.log(this.state.searchBox);
    return e => {
      this.setState({ [input]: e.target.value });
    };
  }

  handleSort = columnName => {
    this.setState(prevState => ({
      columnToSort:
        columnName === prevState.columnToSort ? `-${columnName}` : columnName
    }));
  };

  render() {
    const headers = [
      {
        name: 'First Name',
        prop: 'firstName'
      },
      {
        name: 'Last Name',
        prop: 'lastName'
      },
      {
        name: 'Email',
        prop: 'email'
      },
      {
        name: 'Practice Name',
        prop: 'practiceName'
      },
      {
        name: 'Specialty',
        prop: 'specialty'
      }
    ];

    const { columnToSort, providers, searchBox } = this.state;
    const values = { searchBox };

    const filteredProviders = providers.filter(provider => {
      return provider.firstName.toLowerCase().includes(searchBox.toLowerCase());
    });
    return (
      <div className="">
        <div className="providers">
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <Header on={on} toggle={toggle} />
                {on && (
                  <CreateProvider
                    toggle={toggle}
                    addProvider={this.addProvider}
                  />
                )}
              </Fragment>
            )}
          </Toggle>
          <SearchProvider
            values={values}
            handleChange={this.handleChange.bind(this)}
          />
          <Providers
            handleSort={this.handleSort}
            headers={headers}
            sortDirection={columnToSort}
            providers={filteredProviders.sort(sortBy(columnToSort))}
          />
        </div>
      </div>
    );
  }
}
