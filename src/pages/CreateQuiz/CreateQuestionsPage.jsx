import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Typography } from '@mui/material';
import { answersUserQuiz } from '../../api/Answers/answersUserQuiz';
import InputText from '../../components/Forms/InputText';
import { quizRules } from '../../components/Forms/constants';

function QuestionForm() {
  const navigate = useNavigate();
  const {
    control, handleSubmit, register, getValues,
  } = useForm();
  const [questions, setQuestions] = useState([
    {
      question: '',
      options: [{ id: 0, text: '', isCorrect: false }],
    },
  ]);

  const addQuestion = () => {
    const newQuestion = {
      question: '',
      options: [{ id: 0, text: '', isCorrect: false }],
    };
    setQuestions([...questions, newQuestion]);
  };

  const addOption = (questionIndex) => {
    const newOptions = [
      ...questions[questionIndex].options,
      {
        id: questions[questionIndex].options.length,
        text: '',
        isCorrect: false,
      },
    ];
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options = newOptions;
    setQuestions(updatedQuestions);
  };

  const removeOption = (questionIndex, optionId) => {
    const newOptions = questions[questionIndex].options.filter((option) => option.id !== optionId);
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options = newOptions;
    setQuestions(updatedQuestions);
  };

  const onSubmit = () => {
    const formData = getValues();

    const formattedQuestions = formData.questions.map((q) => {
      const formattedOptions = q.options
        .filter((option) => option.text.trim() !== '')
        .map((option, optionIndex) => ({
          id: optionIndex,
          text: option.text,
          isCorrect: option.isCorrect || false,
        }));
      return {
        text: q.question,
        options: formattedOptions,
      };
    });

    formattedQuestions.forEach((formattedData) => {
      answersUserQuiz.post(formattedData);
    });

    navigate('/');
  };

  return (
    <>
      <Typography sx={{ mt: '50px' }} variant="h5" align="center" gutterBottom>
        Creating answers
      </Typography>
      <form style={{ margin: '100px' }} onSubmit={handleSubmit(onSubmit)}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <InputText
              fullWidth
              control={control}
              defaultValue=""
              rules={quizRules.quizQuestion}
              name={`questions[${questionIndex}].question`}
              label={`Question ${questionIndex + 1}`} />
            {question.options.map((option, optionIndex) => (
              <div key={option.id}>
                <InputText
                  fullWidth
                  control={control}
                  defaultValue={option.text}
                  required
                  name={`questions[${questionIndex}].options[${optionIndex}].text`}
                  label={`Option ${optionIndex + 1}`} />
                <Checkbox
                  defaultChecked={option.isCorrect}
                  {...register(`questions[${questionIndex}].options[${optionIndex}].isCorrect`)}
                  color="primary"
                  label={'Mark as correct'}
                />
                <label htmlFor='checkbox'>Mark as correct</label>
                <Button
                  sx={{ ml: '20px' }}
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeOption(questionIndex, option.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              sx={{ m: '20px' }}
              variant="outlined"
              color="primary"
              onClick={() => addOption(questionIndex)}
              startIcon={<AddIcon />}
            >
              Add Option
            </Button>
          </div>
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={addQuestion}
          startIcon={<AddIcon />}
        >
          Add Question
        </Button>
        <Button
          sx={{ ml: '50px' }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default QuestionForm;
