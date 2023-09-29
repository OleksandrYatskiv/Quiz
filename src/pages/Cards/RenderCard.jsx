/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import CircularIndeterminate from '../../components/Loader/Loader';
import {
  CreateBtn,
  Description,
  FavBtn,
  InputContainer,
  Main,
  SearchInput,
} from './styled';
import addBtn from '../../images/create.svg';
import heart from '../../images/favourites.svg';
import {
  setCardList,
  setLoading,
  setError,
  setSearchTerm,
  deleteCard,
} from '../../components/store/quizSlice';
import { quizzes } from '../../api/Quizzes/Quizzes';

export default function RenderCards() {
  const dispatch = useDispatch();
  const {
    cardList, loading, error, searchTerm,
  } = useSelector((state) => state.quiz);

  const fetchCardList = useCallback(async () => {
    dispatch(setLoading(true));

    try {
      const response = await quizzes.get();
      dispatch(setCardList(response));
    } catch (err) {
      dispatch(setError(err));
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCardList();
  }, [fetchCardList]);

  const handleDeleteCard = (idToDelete) => {
    dispatch(deleteCard(idToDelete));
  };

  return (
    <>
      <InputContainer>
        <SearchInput
          placeholder="Find a quiz"
          value={searchTerm}
          onChange={(event) => {
            dispatch(setSearchTerm(event.target.value));
          }}
        />
        <Link to="/quiz/create">
          <CreateBtn src={`${addBtn}`}></CreateBtn>
          <Description>Create a quiz</Description>
        </Link>
        <Link to="/quiz/favourites">
          <FavBtn src={`${heart}`}></FavBtn>
          <Description>Favourites</Description>
        </Link>
      </InputContainer>
      <Main>
        {loading ? (
          <CircularIndeterminate loading={loading} />
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          cardList
            .filter((card) => {
              if (searchTerm === '') {
                return true;
              }
              return card.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((card) => (
              <Card key={card.id} quiz={card} onDelete={() => handleDeleteCard(card.id)} />
            ))
        )}
      </Main>
    </>
  );
}
