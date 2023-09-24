import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Layout from './components/Layout/Layout';
import CreateQuizPage from './pages/CreateQuiz/CreateQuizPage';
import Favourites from './pages/Favourites/Favourites';
import Quiz from './pages/QuizPage/Quiz';
import QuizStartPage from './pages/QuizPage/StartPage';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path='quiz/create' element={<CreateQuizPage />} />
            <Route path='quiz/favourites' element={<Favourites />} />
            <Route path='quiz/:quizId' element={<Quiz />} />
            <Route path='quizStartPage/:quizId' element={<QuizStartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
