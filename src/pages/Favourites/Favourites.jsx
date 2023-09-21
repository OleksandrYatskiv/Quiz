/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Main } from '../Cards/styled';
import Card from '../../components/Card/Card';
import { quizzes } from '../../api/Quizzes/Quizzes';
import CircularIndeterminate from '../../components/Loader/Loader';

export default function Favourites() {
  const [favouritesList, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCardList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizzes.get();
      setFavourites(response.filter((card) => JSON.parse(card.isFavourite) === true));
      setLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  }, [setError]);

  useEffect(() => {
    fetchCardList();
  }, [fetchCardList]);

  const handleDeleteCard = (idToDelete) => {
    const updatedQuizzes = favouritesList.filter((quiz) => quiz.id !== idToDelete);
    setFavourites(updatedQuizzes);
  };

  if (loading) {
    return <CircularIndeterminate loading={loading} />;
  }
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '50px' }}>Favourite Quizzes:</Typography>
      <Main sx={{ margin: '100px auto' }}>
        {favouritesList.length === 0 ? (
          <Typography variant='h6' sx={{ textAlign: 'center', marginTop: '50px', width: '100%' }}>You have no favourite quizzes.</Typography>
        ) : (
          favouritesList.map((card) => (
            <Card key={card.id} quiz={card} onDelete={() => handleDeleteCard(card.id)} />
          ))
        )}
      </Main>
    </>
  );
}
