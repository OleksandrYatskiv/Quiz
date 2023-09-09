import React, { Component } from "react";
import { Typography } from "@mui/material";
import { Action, CardActionContainer, CardContainer, CardImg } from "./styled";
import ModalWindow from "../ModalWindow/ClassedModalWindow";
// import ModalWindow from "../ModalWindow/ModalWindow";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }

  handleShowModal = () => {
    this.setState({ isShowModal: !this.state.isShowModal });
  };

  render() {
    const { quiz } = this.props;
    const { isShowModal } = this.state;

    return (
      <>
        <CardContainer>
          <CardImg src={quiz.image}></CardImg>
          <Typography sx={{ textAlign: 'center', margin: '10px 0' }} variant="h5">{quiz.name}</Typography>
          <Typography sx={{ textAlign: 'center' }}>{quiz.description}</Typography>
          <CardActionContainer>
            <Action onClick={this.handleShowModal}>Show more info</Action>
            <Action onClick={() => alert('Quiz started!')}>Start Quiz</Action>
          </CardActionContainer>
        </CardContainer>
        {isShowModal && <ModalWindow quiz={quiz} />}
      </>
    );
  }
}
