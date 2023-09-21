import { styled } from '@mui/material';

export const Sidebar = styled('aside')(({ theme }) => ({
  borderRight: '2px solid #e0e0e0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    minHeight: '400px',
  },
}));

export const Action = styled('div')(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#2196F3',
  transition: 'color 0.2s',
  ':hover': {
    color: '#0D47A1',
    cursor: 'pointer',
  },
  fontSize: '20px',
  marginTop: '25px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
