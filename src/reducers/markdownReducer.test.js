import reducer from './markdownReducer';
import { updateIndex, saveDocument } from '../actions/updateIndex';

describe('indexReducer', () => {
  it('returns the same state when it does not understand action', () => {
    const state = { index: 'hello' };
    const action = {
      type: 'FAKE',
      payload: 'hello'
    };
    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('updates the title state when it gets an UPDATE_INDEX action', () => {
    const state = { index: 0 };
    const action = updateIndex(3);

    const newState = reducer(state, action);

    expect(newState).toEqual({ index: 3 });
  });

  it('updates the document array state when it gets an SAVE_DOCUMENT action', () => {
    const state = { documents: [{ id: 0, title: 'test', body: '' }] };
    const action = saveDocument('test 2');

    const newState = reducer(state, action);

    expect(newState).toEqual({ documents: [
      { id: 0, title: 'test', body: '' },
      { id: 1, title: 'test 2', body: '' }
    ] });
  });

});
