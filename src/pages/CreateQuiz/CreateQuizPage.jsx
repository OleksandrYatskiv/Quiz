import {
  Button, Container, Grid, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizzes } from '../../api/Quizzes/Quizzes';

export default function CreateQuizPage() {
  const [quizData, setQuizData] = useState({
    image: '',
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizData({
      ...quizData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    quizzes.post(quizData);
    navigate('/');
    setQuizData({
      image: '',
      name: '',
      description: '',
    });
  };

  return (
    <Container sx={{ margin: '90px auto' }} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Creating a quiz
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Quiz Name"
              variant="outlined"
              fullWidth
              name="name"
              value={quizData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Image link"
              variant="outlined"
              fullWidth
              name="image"
              value={quizData.image}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Quiz description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={quizData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Quiz
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
