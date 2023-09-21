import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RenderCards from '../Cards/RenderCard';
import SidebarComponent from '../../components/Sidebar/Sidebar';

export default function Homepage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={2}>
          <SidebarComponent></SidebarComponent>
        </Grid>
        <Grid item xs={12} md={9}>
          <RenderCards></RenderCards>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Box>
  );
}
