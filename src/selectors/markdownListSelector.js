export const getMarkdownList = state => {
  console.log(state)
  return state.markdownReducer.documents;
};
