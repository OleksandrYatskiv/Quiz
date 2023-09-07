import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Action, Footer, Header, Main, Search, Sidebar } from './styled';
import { Typography } from '@mui/material';
import Cards from './pages/Cards/Card';

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Header>
            <Typography variant='h3' sx={{ textAlign: 'center', color: 'white' }}>
              Quiz
            </Typography>
          </Header>
        </Grid>
        <Grid item xs={12} md={3}>
          <Sidebar>
            <Search placeholder='Find a quiz'></Search>
            <Action>JS</Action>
            <Action>React</Action>
            <Action>HTML</Action>
            <Action>CSS</Action>
            <Action>Java</Action>
            <Action>Python</Action>
          </Sidebar>
        </Grid>
        <Grid item xs={12} md={8}>
          <Main>
            <Cards></Cards>
          </Main>
        </Grid>
        <Grid item xs={12}>
          <Footer>
            <Typography sx={{ textAlign: 'center', marginTop: '25px', }}>
              ©2023 Oleksandr Yatskiv | All rights reserved.
            </Typography>
          </Footer>
        </Grid>
      </Grid>
    </Box>
  );
}
