import React from 'react';

function DataDisplay({ data }) {
  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Year: {item.year}, Scenario: {item.scenario}, Temperature: {item.temperature}°C, Precipitation: {item.precipitation}mm
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default DataDisplay;
