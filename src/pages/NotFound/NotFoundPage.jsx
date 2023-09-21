import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NotFoundContainer, NotFoundContent } from './styled';

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <Container>
        <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className={`${NotFoundContent}`}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h2">Page Not Found</Typography>
          <Typography variant="body1">
            Sorry, the page you are looking for does not exist.
          </Typography>
          <Button sx={{ margin: '15px 0' }} variant="contained" color="primary" href="/">
            Go Home
          </Button>
        </Paper>
      </Container>
    </NotFoundContainer>
  );
}
