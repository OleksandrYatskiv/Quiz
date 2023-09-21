// import React, { useEffect, useState } from 'react';
// import Container from '@mui/material/Container';
// import { useParams } from 'react-router-dom';
// import {
//   QuizStartPageContainer,
//   QuizContent,
//   QuizTitle,
//   QuizTime,
//   StartButton,
//   QuizImage,
// } from './styled';
// import { quizzes } from '../../api/Quizzes/Quizzes';
// import { answers } from '../../api/Answers/JsAnswers';

// export default function QuizStartPage(image) {
//   return (
//     <QuizStartPageContainer>
//       <Container sx={{ margin: '0', padding: '0' }} maxWidth="md">
//         <QuizImage src={quiz.image} />
//         <QuizContent>
//           <QuizTitle variant="h5">
//             {quiz.description}
//           </QuizTitle>
//           <QuizTime variant="h6">
//             Passing time: 10 minutes
//           </QuizTime>
//           <StartButton onClick={toggleStart} variant="contained">
//             Start Quiz
//           </StartButton>
//         </QuizContent>
//       </Container>
//     </QuizStartPageContainer>
//   );
// }
