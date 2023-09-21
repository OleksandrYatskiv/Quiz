import { styled } from '@mui/material';

export const CardContainer = styled('div')(() => ({
  maxWidth: '300px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'translateY(-5px)',
  },
}));

export const CardImg = styled('img')(() => ({
  width: '100%',
  height: 'auto',
  margin: '0 auto',
  display: 'block',
}));

export const CardActionContainer = styled('div')(() => ({
  padding: '10px',
  textAlign: 'center',
}));

export const Action = styled('div')(() => ({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#2196F3',
  transition: 'color 0.2s',
  ':hover': {
    color: '#0D47A1',
    cursor: 'pointer',
  },
}));

export const Delete = styled('img')(() => ({
  display: 'block',
  float: 'right',
  width: '25px',
  marginBottom: '15px',
  ':hover': {
    cursor: 'pointer',
  },
}));

export const AddToFavourite = styled('img')(() => ({
  display: 'block',
  float: 'left',
  width: '25px',
  marginBottom: '15px',
  ':hover': {
    cursor: 'pointer',
  },
}));
