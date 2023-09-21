/* eslint-disable arrow-body-style */
/* eslint-disable testing-library/no-await-sync-query */
/* eslint-disable promise/catch-or-return */
/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
// import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
// import { Typography } from '@mui/material';
// import {
// QuizStartPageContainer,
// QuizContent,
// QuizTitle,
// QuizTime,
// StartButton,
//   QuizImage,
// } from './styled';
import { quizzes } from '../../api/Quizzes/Quizzes';
import { answers } from '../../api/Answers/JsAnswers';
import CircularIndeterminate from '../../components/Loader/Loader';

export default function QuizStartPage() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const fetchQuiz = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizzes.getById(quizId);
      setQuiz(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  const fetchAnswers = useCallback(async () => {
    setLoading(true);

    try {
      const response = await answers.getById(quizId);
      setQuestions(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  useEffect(() => {
    fetchQuiz();
    fetchAnswers();
  }, []);

  console.log(quiz);
  if (loading) {
    return (<CircularIndeterminate loading={loading} />);
  }

  if (showResults) {
    return (
      <div className="final-results">
        <h1>Final Results</h1>
        <h2>
          {score} out of {questions.length} correct - (
          {(score / questions.length) * 100}%)
        </h2>
        <button onClick={() => restartGame()}>Restart game</button>
      </div>
    );
  }
  if (!showResults) {
    return (
      <div className="question-card">
        <h2>
          Question: {currentQuestion + 1} out of {questions.length}
        </h2>
        <h3 className="question-text">{questions[currentQuestion].text}</h3>

        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>);
  }
}
//   return (
//     <div className="App">
//       {/* 1. Header  */}
//       <h1>USA Quiz 🇺🇸</h1>

//       {/* 2. Current Score  */}
//       <h2>Score: {score}</h2>

//       {/* 3. Show results or show the question game  */}
//       {showResults ? (
//         /* 4. Final Results */
//         <div className="final-results">
//           <h1>Final Results</h1>
//           <h2>
//             {score} out of {questions.length} correct - (
//             {(score / questions.length) * 100}%)
//           </h2>
//           <button onClick={() => restartGame()}>Restart game</button>
//         </div>
//       ) : (
//         /* 5. Question Card  */
//         <div className="question-card">
//           {/* Current Question  */}
//           <h2>
//             Question: {currentQuestion + 1} out of {questions.length}
//           </h2>
//           <h3 className="question-text">{questions[currentQuestion].text}</h3>

//           {/* List of possible answers  */}
//           <ul>
//             {questions[currentQuestion].options.map((option) => {
//               return (
//                 <li
//                   key={option.id}
//                   onClick={() => optionClicked(option.isCorrect)}
//                 >
//                   {option.text}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// return (
//     showResults ? (
//       <QuizStartPageContainer>
//         <Container sx={{ margin: '0', padding: '0' }} maxWidth="md">
//           <QuizImage src={quiz.image} />
//           <QuizContent>
//             <Typography>{questions[currentQuestion].text}</Typography>
//             <button onClick={() => restartGame()}>Restart game</button>
//           </QuizContent>
//         </Container>
//       </QuizStartPageContainer>
//     ) : (
//       <ul>
//         {questions[currentQuestion].options.map((option) => (
//           <li
//             key={option.id}
//             onClick={() => optionClicked(option.isCorrect)}
//           >
//             {option.text}
//           </li>
//         ))}
//       </ul>
//     )
//   );
// }
