import {
  Button, Container, Grid, Typography, Checkbox,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputText from '../../components/Forms/InputText';
import { quizRules } from '../../components/Forms/constants';
import { answersUserQuiz } from '../../api/Answers/answersUserQuiz';

export default function CreateQuestionsPage() {
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState([
    {
      text: '',
      options: [
        {
          id: 0,
          text: '',
          isCorrect: false,
        },
        {
          id: 1,
          text: '',
          isCorrect: false,
        },
        {
          id: 2,
          text: '',
          isCorrect: false,
        },
        {
          id: 3,
          text: '',
          isCorrect: false,
        },
      ],
    },
  ]);

  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    answersUserQuiz.post(quizData);
    console.log(quizData);
    navigate('/');
  };

  const addQuestion = () => {
    setQuizData((prevData) => [
      ...prevData,
      {
        text: '',
        options: [
          {
            id: 0,
            text: '',
            isCorrect: false,
          },
          {
            id: 1,
            text: '',
            isCorrect: false,
          },
          {
            id: 2,
            text: '',
            isCorrect: false,
          },
          {
            id: 3,
            text: '',
            isCorrect: false,
          },
        ],
      },
    ]);
  };

  const handleCheckboxChange = (questionIndex, optionIndex) => (event) => {
    const isChecked = event.target.checked;
    setQuizData((prevData) => {
      const updatedData = [...prevData];
      updatedData[questionIndex].options[optionIndex].isCorrect = isChecked;
      return updatedData;
    });
  };

  return (
    <Container sx={{ margin: '100px auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {quizData.map((question, questionIndex) => (
          <div key={questionIndex}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" align="center" gutterBottom>
                  Creating questions
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputText
                  fullWidth
                  control={control}
                  rules={quizRules.quizQuestion}
                  name={`quizData[${questionIndex}].text`}
                  label={`Question ${questionIndex + 1} text`}
                />
              </Grid>
              {question.options.map((option, optionIndex) => (
                <Grid item xs={12} key={optionIndex}>
                  <InputText
                    fullWidth
                    control={control}
                    name={`quizData[${questionIndex}].options[${optionIndex}].text`}
                    label={`Option ${optionIndex + 1} text`}
                  />
                  <Checkbox
                    checked={option.isCorrect}
                    onChange={handleCheckboxChange(questionIndex, optionIndex)}
                  />
                  <label>Mark as Correct</label>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
        <Grid item xs={12}>
          <Button onClick={addQuestion} variant="contained" color="primary">
            Add Question
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Create Quiz
          </Button>
        </Grid>
      </form>
    </Container>
  );
}
