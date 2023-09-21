import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { quizzes } from '../../api/Quizzes/Quizzes';
import Card from '../../components/Card/Card';
import CircularIndeterminate from '../../components/Loader/Loader';
import {
  CreateBtn, Description, FavBtn, InputContainer, Main, SearchInput,
} from './styled';
import addBtn from '../../images/create.svg';
import heart from '../../images/favourites.svg';

export default function RenderCards() {
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCardList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizzes.get();
      setCardList(response);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [setError, setLoading]);

  useEffect(() => {
    fetchCardList();
  }, []);

  if (loading) {
    return (<CircularIndeterminate loading={loading} />);
  }
  if (error) return <p>{error.message}</p>;

  const handleDeleteCard = (idToDelete) => {
    const updatedQuizzes = cardList.filter((quiz) => quiz.id !== idToDelete);
    setCardList(updatedQuizzes);
  };

  return (
    <>
      <InputContainer>
        <SearchInput
          placeholder='Find a quiz'
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
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
        {cardList
          .filter((card) => {
            if (searchTerm === '') {
              return true;
            }
            return card.name.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((card) => (
            <Card key={card.id} quiz={card} onDelete={() => handleDeleteCard(card.id)} />
          ))}
      </Main>
    </>
  );
}
