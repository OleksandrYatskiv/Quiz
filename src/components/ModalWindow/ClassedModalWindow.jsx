import React, { Component } from "react";
import { Paper, Typography } from "@mui/material";
import { Action, ActionWrapp, Image, ModalWrapp } from "./styled";

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true,
    }
  }
  isModalOpen() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleClose() {
    this.isModalOpen(false);
  };

  render() {
    const modalOpen = this.isModalOpen();
    if (!modalOpen) {
      return null;
    }

    const { quiz } = this.props;
    return (
      <ModalWrapp>
        <Paper style={{ width: '400px', padding: '30px' }}>
          <Image src={quiz.image}></Image>
          <Typography variant="h5" sx={{ textAlign: 'center', margin: '15px 0' }}>
            The Test
          </Typography>
          <Typography>
            The test contains 10 questions and there is no time limit.
          </Typography>
          <Typography>
            The test is not official, it's just a nice way to see how much you know, or don't know, about {quiz.name}.
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', margin: '15px 0' }}>
            Count Your Score
          </Typography>
          <Typography>
            You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed. Maximum score is 25 points.
          </Typography>
          <ActionWrapp>
            <Action onClick={() => alert('Quiz started!')}>Start Quiz</Action>
            <Action onClick={() => this.handleClose()}>Close</Action>
          </ActionWrapp>
        </Paper>
      </ModalWrapp>
    );
  };
}

