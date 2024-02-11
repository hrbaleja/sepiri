// src/components/EventRegistrationForm.js
import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Paper } from '@mui/material';
import EventPreview from './EventPreview'; // Import the EventPreview component

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    address: '',
    mainImage: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    attendanceImage1: null,
    attendanceImage2: null,
    certificateImage: null,
  });
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleFileChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.files[0],
    });
  };

  const renderImageInput = (fieldName, label) => (
    <div style={{ margin: '10px 0' }}>
      <Typography variant="body1">{label}:</Typography>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange(fieldName)}
      />
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Grid container spacing={2} justifyContent="center">

      {submitted ? (
        <EventPreview formData={formData} />
      ) : (<Grid item xs={12} md={8}>

        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom textAlign={'center'}>          BSE Report             </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Date"
              type="date"
              value={formData.date}
              onChange={handleChange('date')}
              required
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin="normal"
            />
        
            <TextField
              label="Time"
              type="time"
              value={formData.time}
              onChange={handleChange('time')}
              required
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 minutes
                format: 'hh:mm a', // 'a' will display AM/PM
                placeholder: 'HH:MM AM/PM',
              }}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              value={formData.address}
              onChange={handleChange('address')}
              required
              fullWidth
              margin="normal"
            />
            {/* File input for the main image */}
            {renderImageInput('mainImage', 'Main Image')}

            {/* File inputs for additional images */}
            {renderImageInput('image1', 'Image 1')}
            {renderImageInput('image2', 'Image 2')}
            {renderImageInput('image3', 'Image 3')}
            {renderImageInput('image4', 'Image 4')}
            {renderImageInput('attendanceImage1', 'Attendance Image 1')}
            {renderImageInput('attendanceImage2', 'Attendance Image 2')}
            {renderImageInput('certificateImage', 'Certificate Image')}

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>

      )}

    </Grid>
  );
};

export default EventRegistrationForm;
