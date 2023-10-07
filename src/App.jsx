import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Layout from './components/Layout/Layout';
import CreateQuizPage from './pages/CreateQuiz/CreateQuizPage';
import Favourites from './pages/Favourites/Favourites';
import Quiz from './pages/QuizPage/Quiz';
import QuizStartPage from './pages/QuizPage/StartPage';
import store from './store/store';
import CreateQuestionsPage from './pages/CreateQuiz/CreateQuestionsPage';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path='quiz/create' element={<CreateQuizPage />} />
            <Route path='quiz/create/questions' element={<CreateQuestionsPage />} />
            <Route path='quiz/favourites' element={<Favourites />} />
            <Route path='quiz/:quizId' element={<Quiz />} />
            <Route path='quizStartPage/:quizId' element={<QuizStartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
