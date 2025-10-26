import React from 'react';
import { Container, Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Build Momentum',
      description: 'Track and celebrate progress on your personally identified goals',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: 'Science-Backed',
      description: 'Utilizes neuroscience and psychology principles to keep you motivated',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: 'Gamification',
      description: 'Earn rewards and achievements that encourage continuous engagement',
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 40 }} />,
      title: 'AI-Powered',
      description: 'Get personalized motivation and real-time feedback on your progress',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 8,
        }}
      >
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Build Momentum
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
          >
            Your productivity dashboard optimized to help you achieve your goals
            through science-backed strategies, gamification, and AI-powered insights.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/dashboard')}
              sx={{ px: 4, py: 1.5 }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Landing;
