import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Action, Headline, Sidebar } from './styled';

function SidebarComponent() {
  const { quizzes } = useSelector((state) => state.quizReducer);
  return (
    <>
      <Headline>Quick Start</Headline>
      <Sidebar>
        {quizzes.map((quiz) => (
          <Link key={quiz.id} style={{ textDecoration: 'none' }} to={`/quiz/${quiz.id}`}>
            <Action>
              {quiz.name}
            </Action>
          </Link>
        ))}
      </Sidebar>
    </>
  );
}

export default SidebarComponent;
