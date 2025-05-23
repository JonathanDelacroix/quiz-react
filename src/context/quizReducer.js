export const quizReducer = (state, action) => {
  switch (action.type) {
    case "VALIDATE_ANSWER":
      return state.map((question) =>
        question.id === action.payload.id ? { ...question, validation: action.payload.validation } : question
      );
    default:
      return state;
  }
};