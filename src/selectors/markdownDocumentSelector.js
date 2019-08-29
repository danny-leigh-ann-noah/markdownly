export const getDocument = state => {
  return state.markdownReducer.documents[state.markdownReducer.index];
};
