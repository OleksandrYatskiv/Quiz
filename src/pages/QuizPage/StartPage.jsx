import React from 'react';
import Container from '@mui/material/Container';
import { Link, useParams } from 'react-router-dom';
import {
  QuizStartPageContainer,
  QuizContent,
  QuizTime,
  StartButton,
  QuizTitle,
  StartQuizImage,
} from './styled';
import quizTime from '../../images/quizTime.png';

export default function QuizStartPage() {
  const { quizId } = useParams();
  return (
    <>
      <QuizStartPageContainer>
        <Container sx={{ margin: '0', padding: '0' }} maxWidth="md">
          <StartQuizImage src={quizTime} />
          <QuizContent>
            <QuizTitle variant="h5">
              The test contains 10 questions.
            </QuizTitle>
            <QuizTime variant="h6">
              You have 30 seconds for each question.
            </QuizTime>
            <Link to={`/quiz/${quizId}`}>
              <StartButton variant="contained">
                Start Quiz
              </StartButton>
            </Link>
          </QuizContent>
        </Container>
      </QuizStartPageContainer>
    </>
  );
}
