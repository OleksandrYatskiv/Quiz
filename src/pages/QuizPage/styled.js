import { Button, Typography, styled } from '@mui/material';

export const QuizStartPageContainer = styled('div')(() => ({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '100px',
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
  maxWidth: '100px',
  display: 'block',
  margin: '20px auto',
}));

export const ContainerUl = styled('ul')(() => ({
  listStyle: 'none',
  padding: 0,
}));

export const ItemLi = styled('li')(({ theme }) => ({
  backgroundColor: '#2196F3',
  color: '#fff',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#1976D2',
  },
  borderRadius: '10px',
  minWidth: '300px',
  textAlign: 'center',
}));

export const RestartBtn = styled('button')(({ theme }) => ({
  backgroundColor: '#FF0000',
  color: '#FFFFFF',
  padding: theme.spacing(2, 4),
  fontSize: '18px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#FF3333',
  },
  marginTop: '30px',
  borderRadius: '10px',
  cursor: 'pointer',
}));

export const BackHomeBtn = styled('button')(({ theme }) => ({
  backgroundColor: '#2196F3',
  color: '#FFFFFF',
  padding: theme.spacing(2, 4),
  fontSize: '18px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#1976D2',
  },
  marginTop: '30px',
  marginLeft: '30px',
  borderRadius: '10px',
  cursor: 'pointer',
}));

export const BtnContainer = styled('div')(() => ({
  display: 'flex',
}));

export const StartQuizImage = styled('img')(() => ({
  maxWidth: '300px',
  display: 'block',
  margin: '20px auto',
}));
