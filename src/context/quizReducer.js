export const quizReducer = (state, action) => {
  switch (action.type) {
    case "VALIDATE_ANSWER":
      return state.map(question => {
        if (question.id === action.payload.id && !question.validated) {
          return {
            ...question,
            validated: true,
            userAnswer: action.payload.answer,
          };
        }
        return question;
      });
    default:
      return state;
  }
};
