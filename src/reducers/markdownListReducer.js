import { UPDATE_MARKDOWN_LIST } from '../actions/updateMarkdownList';
const initialState = {
  markdownFiles: []
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_MARKDOWN_LIST:
      return { ...state, markdownFiles: action.payload };
    default:
      return state;
  }
}
