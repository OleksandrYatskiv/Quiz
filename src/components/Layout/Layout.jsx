/* eslint-disable max-len */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Footer, Header } from './styled';
import instagramLogo from '../../images/instagram.svg';
import githubLogo from '../../images/github-mark-white.svg';

export default function Layout() {
  return (
    <>
      <Grid item xs={12}>
        <Header>
          <Typography variant='h3' sx={{ textAlign: 'center' }}>
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Quiz</Link>
          </Typography>
        </Header>
      </Grid>
      <Outlet></Outlet>
      <Grid item xs={12}>
        <Footer>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_alex_yatskiv_n25/">
              <img style={{ width: '30px' }} src={instagramLogo} alt="Instagram Logo" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/OleksandrYatskiv">
              <img style={{ width: '30px', marginLeft: '20px' }} src={githubLogo} alt="Github Logo" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/oleksandr-yatskiv-605b02284/">
              <img style={{ width: '30px', marginLeft: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn logo" />
            </a>
          </div>
          <Typography sx={{ textAlign: 'center', marginTop: '10px' }}>
            ©2023 Oleksandr Yatskiv | All rights reserved.
          </Typography>
        </Footer>
      </Grid>
    </>
  );
}
