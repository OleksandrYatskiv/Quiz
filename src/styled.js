import { styled } from "@mui/material";

export const Header = styled('nav')(() => ({
  height: '70px',
  backgroundColor: '#2196F3',
}));

export const Footer = styled('footer')(() => ({
  height: '70px',
  backgroundColor: '#2196F3',
  color: 'white',
  padding: '10px 0',
  width: '100%',
}));

export const Sidebar = styled('aside')(({theme}) => ({
  borderRight: '2px solid #e0e0e0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    minHeight: '400px',
  },
}));

export const Search = styled('input')(() => ({
  display: 'block',
  margin: '10px auto',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '200px',
  height: '20px',
  ":focus": {
    outline: 'none',
    borderColor: '#007bff',
    boxShadow: '0 0 5px #007bff',
  },
  "::placeholder": {
    textAlign: 'center',
  }
}));

export const Main = styled('main')(({ theme }) => ({
  backgroundColor: '#f0f0f0',
  display: 'grid',
  gridGap: '40px',
  borderRadius: '10px',
  padding: '30px',
  [theme.breakpoints.up('xs')]: {
    gridTemplateColumns: '1fr',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

export const Action = styled('div')(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#2196F3',
  transition: 'color 0.2s',
  ":hover": {
    color: '#0D47A1',
    cursor: 'pointer',
  },
  fontSize: '20px',
  marginTop: '25px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));