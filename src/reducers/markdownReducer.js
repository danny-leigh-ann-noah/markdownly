import { UPDATE_INDEX, UPDATE_BODY } from '../actions/updateIndex';

const initialState = {
  index: 0,
  documents: [{ id: 'fake', title: '', body: 'abcdefg' }]
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
    default: 
      return state;
  }
}
