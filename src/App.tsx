import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { theme } from './theme';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

// Configure Amplify
Amplify.configure(awsconfig);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
