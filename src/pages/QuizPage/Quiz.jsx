/* eslint-disable promise/always-return */
/* eslint-disable arrow-body-style */
/* eslint-disable testing-library/no-await-sync-query */
/* eslint-disable promise/catch-or-return */
/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Confetti from 'react-confetti';
import { quizzes } from '../../api/Quizzes/Quizzes';
import CircularIndeterminate from '../../components/Loader/Loader';
import { answersJS } from '../../api/Answers/answersJS';
import {
  BackHomeBtn,
  BtnContainer,
  ContainerUl,
  ItemLi,
  QuizImage,
  QuizStartPageContainer,
  RestartBtn,
} from './styled';
import { answersReact } from '../../api/Answers/answersReact';
import { answersHTML } from '../../api/Answers/answersHTML';
import { answersCSS } from '../../api/Answers/answersCSS';
import { answersJava } from '../../api/Answers/answersJava';
import { answersPython } from '../../api/Answers/answersPython';
import NotFoundPage from '../NotFound/NotFoundPage';

export default function Quiz() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timeColor, setTimeColor] = useState('#2196F3');

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
    setTimeLeft(30);
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const fetchQuiz = useCallback(async () => {
    setLoading(true);

    try {
      const quizResponse = await quizzes.getById(quizId);
      setQuiz(quizResponse);
    } catch (error) {
      console.error(error);
    }
  }, [quizId]);

  const fetchAnswer = useCallback(async () => {
    try {
      let answersResponse;
      switch (quiz.name) {
        case 'JS':
          answersResponse = await answersJS.get();
          break;
        case 'React':
          answersResponse = await answersReact.get();
          break;
        case 'HTML':
          answersResponse = await answersHTML.get();
          break;
        case 'CSS':
          answersResponse = await answersCSS.get();
          break;
        case 'Java':
          answersResponse = await answersJava.get();
          break;
        case 'Python':
          answersResponse = await answersPython.get();
          break;
        default:
          break;
      }
      setQuestions(answersResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [quiz]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  useEffect(() => {
    if (quiz.name) {
      fetchAnswer();
    }
  }, [quiz]);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }

    if (timeLeft === 0) {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(30);
        setTimeColor('#2196F3');
      } else {
        setShowResults(true);
      }
    }
  }, [timeLeft, currentQuestion, showResults, questions]);

  useEffect(() => {
    if (timeLeft === 15) {
      setTimeColor('#FFC107');
    } else if (timeLeft === 5) {
      setTimeColor('#FF0000');
    } else if (timeLeft === 30) {
      setTimeColor('#2196F3');
    }
  }, [timeLeft]);

  if (loading) return (<CircularIndeterminate loading={loading} />);

  if (!questions?.length) return (<NotFoundPage />);

  if (showResults && questions.length > 0) {
    return (
      <>
        <QuizStartPageContainer>
          <Confetti></Confetti>
          <Typography sx={{ margin: '20px auto' }} variant='h4'>Final Results</Typography>
          <Typography variant='h6'>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </Typography>
          <BtnContainer>
            <RestartBtn onClick={() => restartGame()}>Restart Quiz</RestartBtn>
            <Link to="/">
              <BackHomeBtn>Back Home</BackHomeBtn>
            </Link>
          </BtnContainer>
        </QuizStartPageContainer>
      </>
    );
  }
  if (!showResults && questions.length > 0) {
    return (
      <QuizStartPageContainer>
        <QuizImage src={quiz.image}></QuizImage>
        <Typography sx={{ display: 'inline-block' }} variant='h4'>
          Question: {currentQuestion + 1} out of {questions.length}
        </Typography>
        <Typography variant='h5' sx={{ margin: '10px', color: timeColor }}>Time: {timeLeft}</Typography>
        <Typography variant='h6'>{questions[currentQuestion].text}</Typography>
        <ContainerUl>
          {questions[currentQuestion].options.map((option) => {
            return (
              <ItemLi
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </ItemLi>
            );
          })}
        </ContainerUl>
      </QuizStartPageContainer>);
  }
}
