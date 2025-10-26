import React from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Dashboard: React.FC = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Container maxWidth="lg">
          <Box sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome, {user?.username}!
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
              Your productivity dashboard is ready to help you build momentum.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Goals Overview
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Coming soon: Track your goals and progress here.
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Achievements
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Coming soon: View your achievements and milestones.
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    AI Insights
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Coming soon: Get personalized feedback and motivation.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </Authenticator>
  );
};

export default Dashboard;
