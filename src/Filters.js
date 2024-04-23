import React from 'react';

function Filters({ setYear, setScenario }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setYear(e.target.value)}
        placeholder="Filter by Year"
      />
      <input
        type="text"
        onChange={(e) => setScenario(e.target.value)}
        placeholder="Filter by Scenario"
      />
    </div>
  );
}

export default Filters;
