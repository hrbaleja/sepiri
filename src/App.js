// src/App.js
import React from 'react';
import EventForm from './components/EventForm';
import ReportDownload from './components/ReportDownload';
import Dashboard from './components/Dashboard';
import { Tabs, Tab, Container, Box } from '@mui/material';

function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case 0:
        return <EventForm />;
      case 1:
        return <Dashboard />;
      case 2:
        return <ReportDownload />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="BSE Report" />
          <Tab label="Dashboard" />
          <Tab label="Report Download" />
        </Tabs>
      </Box>



      <Container>
        {renderTabContent()}
      </Container>
    </div>
  );
}

export default App;
