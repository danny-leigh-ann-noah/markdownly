import { UPDATE_INDEX } from '../actions/updateIndex';
import { UPDATE_BODY } from '../actions/updateDocumentBody';

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
      newDocuments[state.index] = { ...state[state.index], body };
      return { ...state, documents: newDocuments };
    }
    default: 
      return state;
  }
}
