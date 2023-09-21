import Button from '@mui/material/Button';
import { Typography, styled } from '@mui/material';

export const QuizStartPageContainer = styled('div')(() => ({
  backgroundColor: '#fff',
  // height: '77.5vh', // bruh height
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '110px',
  // padding: '0 24px 24px 24px',
}));

export const QuizContent = styled('div')(() => ({
  textAlign: 'center',
}));

export const QuizTitle = styled(Typography)(({ theme }) => ({
  color: '#333',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

export const QuizTime = styled(Typography)(({ theme }) => ({
  color: '#666',
  fontSize: '18px',
  marginBottom: theme.spacing(2),
}));

export const StartButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFC107',
  color: '#000',
  padding: theme.spacing(2, 4),
  fontSize: '18px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#FFA000',
  },
  marginTop: '30px',
}));

export const QuizImage = styled('img')(() => ({
  maxWidth: '200px',
  display: 'block',
  margin: '20px auto',
}));
