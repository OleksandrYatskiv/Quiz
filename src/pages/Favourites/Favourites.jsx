/* eslint-disable max-len */
import React, { useEffect, useMemo } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from '../Cards/styled';
import Card from '../../components/Card/Card';
import thunks from '../../store/services/quiz/thunks';
import actions from '../../store/services/quiz/actions';

export default function Favourites() {
  const dispatch = useDispatch();
  const { favouritesList } = useSelector((state) => state.quizReducer);

  const favList = useMemo(() => (favouritesList), [favouritesList]);

  const filterFavQuizzes = () => {
    dispatch(actions.filterFavQuizzesAction());
  };

  useEffect(() => {
    filterFavQuizzes();
  }, []);

  const handleDelete = (id) => {
    dispatch(thunks.deleteQuiz(id));
  };

  return (
    <>
      <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '50px' }}>Favourite Quizzes:</Typography>
      <Main sx={{ margin: '100px auto' }}>
        {!favouritesList?.length ? (
          <Typography variant='h6' sx={{ textAlign: 'center', marginTop: '50px', width: '100%' }}>You have no favourite quizzes.</Typography>
        ) : (
          favList.map((card) => (
            <Card key={card.id} quiz={card} onDelete={() => handleDelete(card.id)} filter={filterFavQuizzes} />
          ))
        )}
      </Main>
    </>
  );
}
