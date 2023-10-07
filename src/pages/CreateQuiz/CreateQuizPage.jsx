import {
  Button, Container, Grid, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { quizzes } from '../../api/Quizzes/Quizzes';
import InputText from '../../components/Forms/InputText';
import { quizRules } from '../../components/Forms/constants';

export default function CreateQuizPage() {
  const navigate = useNavigate();

  const { control, handleSubmit, getValues } = useForm();

  const onSubmit = () => {
    quizzes.post(getValues());
    navigate('/quiz/create/questions');
  };

  return (
    <Container sx={{ margin: '100px auto' }} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Creating a quiz
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InputText
              fullWidth
              control={control}
              name='name'
              rules={quizRules.quizName}
              label='Quiz name'
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              fullWidth
              control={control}
              name='image'
              rules={quizRules.quizImage}
              label='Image link'
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              fullWidth
              control={control}
              name='description'
              rules={quizRules.quizDescription}
              label='Quiz description'
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary" fullWidth>
              Create Quiz
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
