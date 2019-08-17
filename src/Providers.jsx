import React from 'react';
import SortingHeader from './SortingHeader';
import ProviderList from './ProviderList';
import SearchProvider from './SearchProvider';

export default function Providers() {
  return (
    <div>
      <SearchProvider />
      <SortingHeader />
      <ProviderList />
    </div>
  );
}
