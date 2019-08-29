import { UPDATE_INDEX } from '../actions/updateIndex';

const initialState = {
  index: 0,
  documents: [{ id: 'fake', title: 'fake', body: 'fake' }]
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_INDEX:
      return { ...state, index: action.payload };
    default: 
      return state;
  }
}
