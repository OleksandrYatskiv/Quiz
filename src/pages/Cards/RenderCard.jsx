/* eslint-disable no-nested-ternary */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
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
import actions from '../../store/services/quiz/actions';
import thunks from '../../store/services/quiz/thunks';

export default function RenderCards() {
  const { quizzes, filteredQuizzes, filter } = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const quizzesList = useMemo(() => (filter ? filteredQuizzes : quizzes), [quizzes, filter, filteredQuizzes]);

  const fetchQuizzesList = useCallback(async () => {
    setLoading(true);

    try {
      await dispatch(thunks.fetchQuizzes());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchQuizzesList();
  }, [fetchQuizzesList]);

  const handleDeleteCard = (idToDelete) => {
    dispatch(thunks.deleteQuiz(idToDelete));
  };

  const handleChangeFilter = (e) => {
    dispatch(actions.filterAction(e.target.value));
  };

  return (
    <>
      <InputContainer>
        <SearchInput
          placeholder="Find a quiz"
          value={filter}
          onChange={handleChangeFilter}
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
          quizzesList
            .map((quiz) => (
              <Card
                key={quiz.id}
                quiz={quiz}
                onDelete={() => handleDeleteCard(quiz.id)}
              />
            ))
        )}
      </Main>
    </>
  );
}
