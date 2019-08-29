export const getIndex = state => {
  return state.markdownReducer.index;
};

export const getMarkdownList = state => {
  return state.markdownReducer.documents;
};

export const getDocument = state => {
  return state.markdownReducer.documents[state.markdownReducer.index];
};

export const saveDocument = (state) => {
  return state.markdownReducer.documents;
};
