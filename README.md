# Build and Integrate a Climate Scenario Data API

## Part 1: Take Home Interview Task - Build a Climate Scenario Data API

### Project Overview
This project involves creating a RESTful API using Python and Node.js that serves climate projection data from a static JSON file. This API will later be expanded during the live interview session to integrate with a React application.

### Requirements
- Use Python for backend data processing tasks.
- Use Node.js and Express to create and serve the API.
- The API should handle requests to retrieve data and support filtering by `year` and `scenario`.
- Your `year` values can be 2020, 2025, 2030, 2035, 2040, 2045, 2050, 2060, 2070, 2080, 2090, 2100.
- - Your `scenario` values can be of RCP (2.6, 4.5, 6.0, 8.5) or SSP (1, 2, 3, 4, 5) type.

### Setup Instructions
1. Set up your project in CodeSandbox using the provided template.
2. Ensure Python and Node.js environments are correctly configured in your sandbox.
3. Install necessary dependencies:
   ```bash
   npm install
   ```
4. Start the server:
`npm start`

### API Endpoints

- `GET /data`: Retrieves all climate data.
- `GET /data?year=2050`: Retrieves data for a specific year.
- `GET /data?scenario=RCP2.6`: Retrieves data for a specific scenario path.

### Data Format
Store your climate data in data.json with the following structure:

```
[
  {
    "year": 2050,
    "scenario": "RCP2.6",
    "temperature": 2.5,
    "precipitation": 15
  },
  {
    "year": 2080,
    "scenario": "SSP3",
    "temperature": 4.0,
    "precipitation": 20
  }
]
```

### Submission
Submit your completed API sandbox link before the interview date. Ensure your API is functional and meets the specified requirements.

### Evaluation Criteria
- Functionality: Does the API meet the specified requirements?
- Code Quality: Is the code well-organized and documented?
- Error Handling: Does the API gracefully handle different error scenarios?

## Part 2: Live Interview Task - Integrate API with React Application

### Task Overview
During the live interview, candidates will be provided with a mini React application that displays climate data. They will need to modify their API (developed in the take-home exercise) to ensure it can serve data effectively to this React application.

### React Application Setup
The React application will have basic components to display climate data:
- A list view to show all entries.
- Filters to view data by date or location.

Candidates will be asked to:
- Modify their API to handle requests from the React application.
- Ensure the integration allows the React app to function correctly with dynamic data retrieval based on user input.

### Live Coding Environment
- **Platform:** CodeSandbox
- **Instructions:** You will modify your API in real-time and integrate it with the React application provided in a separate sandbox.

This approach combines coding, practical application, and on-the-fly problem-solving, providing a comprehensive assessment of the candidate’s full stack capabilities.
