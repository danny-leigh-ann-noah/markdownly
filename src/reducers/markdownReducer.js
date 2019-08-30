import { UPDATE_INDEX, UPDATE_BODY, SAVE_DOCUMENT, DELETE_DOCUMENT } from '../actions/updateIndex';

const initialState = {
  index: 0,
  documents: [{ id: 'fake', title: 'HI IM TITLE', body: 'abcdefg' }]
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_INDEX:
      return { ...state, index: action.payload };
    case UPDATE_BODY: {
      const body = action.payload;
      const newDocuments = [...state.documents];
      newDocuments[state.index] = { ...state.documents[state.index], body };
      return { ...state, documents: newDocuments };
    }
    case SAVE_DOCUMENT: 
      return { ...state, documents: [...state.documents, { id: state.documents.length, title: action.payload, body: '' }] };
    case DELETE_DOCUMENT:
      return { ...state, documents:[...state.documents.slice(0, action.payload),  ...state.documents.slice(action.payload + 1)] };
    default: 
      return state;
  }
}
