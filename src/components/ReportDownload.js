// src/ReportDownload.js
import React from 'react';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const ReportDownload = () => {
  const handleDownload = () => {
    // Add logic to generate and download the report here
    alert('Report downloaded!');
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudDownloadIcon />}
        onClick={handleDownload}
      >
        Download Report
      </Button>
    </div>
  );
};

export default ReportDownload;
