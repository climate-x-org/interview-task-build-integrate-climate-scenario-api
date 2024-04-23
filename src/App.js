import React from 'react';
import DataDisplay from './DataDisplay';
import Filters from './Filters';

function App() {
  return (
    <div>
      <h1>Climate Data Viewer</h1>
      <Filters />
      <DataDisplay />
    </div>
  );
}

export default App;
