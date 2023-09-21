import { Paper } from '@mui/material';
import styled from '@mui/material/styles/styled';

export const NotFoundContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f2f2f2',
});

export const NotFoundContent = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: theme.spacing(1),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
}));
