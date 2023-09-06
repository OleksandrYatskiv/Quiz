import { Typography } from "@mui/material";
import { Action, CardActionContainer, CardContainer, CardImg } from "./styled";
import React, { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

export default function Card({ quiz }) {
	const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };

	return (
		<>
			<CardContainer>
				<CardImg src={quiz.image}></CardImg>
				<Typography sx={{textAlign:'center', margin: '10px 0'}} variant="h5">{quiz.name}</Typography>
				<Typography sx={{textAlign:'center'}}>{quiz.description}</Typography>
				<CardActionContainer>
					<Action onClick={handleShowModal}>Show more info</Action>
					<Action onClick={() => alert('Quiz started!')}>Start Quiz</Action>
				</CardActionContainer>
			</CardContainer>
			{isShowModal && <ModalWindow quiz={quiz} />}
		</>
	);
}