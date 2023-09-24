import { styled } from '@mui/material';

export const SearchInput = styled('input')(() => ({
  margin: '10px',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '200px',
  height: '20px',
  ':focus': {
    outline: 'none',
    borderColor: '#007bff',
    boxShadow: '0 0 5px #007bff',
  },
  '::placeholder': {
    textAlign: 'center',
  },
}));

export const Main = styled('main')(({ theme }) => ({
  marginTop: '25px',
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
  marginBottom: '100px',
}));

export const InputContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
  alignItems: 'center',
}));

export const Description = styled('div')(() => ({
  opacity: '0',
  transition: 'opacity 0.3s ease-in-out',
  position: 'absolute',
  color: 'black',
  fontSize: 'small',
}));

export const CreateBtn = styled('img')(() => ({
  '&:hover': {
    '& ~ div': {
      opacity: '1',
    },
  },
  position: 'relative',
  width: '30px',
  margin: '0 30px 0 50px',
}));

export const FavBtn = styled('img')(() => ({
  '&:hover': {
    '& ~ div': {
      opacity: '1',
    },
  },
  position: 'relative',
  width: '30px',
}));
