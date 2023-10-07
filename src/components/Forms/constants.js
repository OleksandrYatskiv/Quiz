const ruleTexts = {
  required: 'Field is required',
  minLength: (minLength) => `Field should have more then ${minLength} symbols`,
  maxLength: (maxLength) => `Field should have less then ${maxLength} symbols`,
};

export const quizRules = {
  quizName: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 2, message: ruleTexts.minLength(2) },
    maxLength: { value: 20, message: ruleTexts.maxLength(20) },
  },
  quizImage: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 3, message: ruleTexts.minLength(3) },
  },
  quizDescription: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 5, message: ruleTexts.minLength(5) },
    maxLength: { value: 150, message: ruleTexts.maxLength(150) },
  },
  quizQuestion: {
    required: { value: false },
    minLength: { value: 5, message: ruleTexts.minLength(5) },
    maxLength: { value: 25, message: ruleTexts.maxLength(25) },
  },
  // quizAnswer: {
  //   required: { value: false },
  //   minLength: { value: 1, message: ruleTexts.minLength(5) },
  //   maxLength: { value: 25, message: ruleTexts.maxLength(25) },
  // },
};
