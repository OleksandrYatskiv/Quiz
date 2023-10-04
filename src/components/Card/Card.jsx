/* eslint-disable no-return-await */
/* eslint-disable max-len */
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Action, AddToFavourite, CardActionContainer, CardContainer, CardImg, Delete,
} from './styled';
import ModalWindow from '../ModalWindow/ModalWindow';
import deleteImg from '../../images/delete.svg';
import addToFavouriteImg from '../../images/addToFavourite.svg';
import favouriteImg from '../../images/favourites.svg';
import thunks from '../../store/services/quiz/thunks';

export default function Card({ quiz, onDelete, filter }) {
  const [isShowModal, setShowModal] = useState(false);
  const [isFavourite, setFavourite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialFavourite = JSON.parse(quiz.isFavourite);
    setFavourite(initialFavourite);
  }, [quiz.isFavourite, isFavourite]);

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };

  const handleFavourite = async () => {
    setFavourite(!isFavourite);
    const params = {
      image: quiz.image,
      name: quiz.name,
      description: quiz.description,
      id: quiz.id,
      isFavourite: !isFavourite,
    };

    await dispatch(thunks.putFavQuiz(params));
    if (filter) filter();
  };

  return (
    <>
      <CardContainer>
        <AddToFavourite onClick={handleFavourite} src={isFavourite ? favouriteImg : addToFavouriteImg} />
        <Delete onClick={onDelete} src={`${deleteImg}`}></Delete>
        <CardImg src={quiz.image} alt='Quiz image'></CardImg>
        <Typography sx={{ textAlign: 'center', margin: '10px 0' }} variant="h5">{quiz.name}</Typography>
        <Typography sx={{ textAlign: 'center' }}>{quiz.description}</Typography>
        <CardActionContainer>
          <Action onClick={handleShowModal}>Show more info</Action>
          <Link to={`/quizStartPage/${quiz.id}`} style={{ textDecoration: 'none' }}>
            <Action>Start Quiz</Action>
          </Link>
        </CardActionContainer>
      </CardContainer>
      {isShowModal && <ModalWindow quiz={quiz} />}
    </>
  );
}
