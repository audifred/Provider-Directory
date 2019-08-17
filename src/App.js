import React from 'react';
import CreateProvider from './form/CreateProvider';
import './App.css';
import Providers from './Providers';

function App() {
  return (
    <React.Fragment>
      <CreateProvider />
      <Providers />
    </React.Fragment>
  );
}

export default App;
