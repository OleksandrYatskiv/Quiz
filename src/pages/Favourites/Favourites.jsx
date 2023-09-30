/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from '../Cards/styled';
import Card from '../../components/Card/Card';
import thunks from '../../store/services/quiz/thunks';

export default function Favourites() {
  const dispatch = useDispatch();
  const {
    favouritesList,
  } = useSelector((state) => state.quiz);

  const handleDeleteCard = (quiz) => {
    const params = {
      image: quiz.image,
      name: quiz.name,
      describtion: quiz.description,
      id: quiz.id,
      isFavourite: !quiz.isFavourite,
    };
    dispatch(thunks.putFavQuiz(params));
  };

  return (
    <>
      <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '50px' }}>Favourite Quizzes:</Typography>
      <Main sx={{ margin: '100px auto' }}>
        {!favouritesList?.length ? (
          <Typography variant='h6' sx={{ textAlign: 'center', marginTop: '50px', width: '100%' }}>You have no favourite quizzes.</Typography>
        ) : (
          favouritesList.map((card) => (
            <Card key={card.id} quiz={card} onDelete={() => handleDeleteCard(card)} />
          ))
        )}
      </Main>
    </>
  );
}
