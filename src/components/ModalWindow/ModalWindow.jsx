import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import {
  Action, ActionWrapp, Image, ModalWrapp,
} from './styled';

export default function ModalWindow({ quiz }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <ModalWrapp>
      <Paper style={{ width: '400px', padding: '30px' }}>
        <Image src={quiz.image}></Image>
        <Typography variant="h5" sx={{ textAlign: 'center', margin: '15px 0' }}>
          The Test
        </Typography>
        <Typography>
          The test contains 10 questions.
          You have one minute for each question, the entire test can last a maximum of 10 minutes.
        </Typography>
        <Typography>
          The test is not official, it&apos;s just a nice way to see how much you know,
          or don&apos;t know, about {quiz.name}.
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center', margin: '15px 0' }}>
          Count Your Score
        </Typography>
        <Typography>
          You will get 1 point for each correct answer.
          At the end of the Quiz, your total score will be displayed. Maximum score is 10 points.
        </Typography>
        <ActionWrapp>
          <Action onClick={() => alert('Quiz started!')}>Start Quiz</Action>
          <Action onClick={handleClose}>Close</Action>
        </ActionWrapp>
      </Paper>
    </ModalWrapp>
  );
}
