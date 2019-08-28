import reducer from './markdownReducer';
import { updateMarkdown } from '../actions/updateMarkdown';

describe('markdownReducer', () => {
  it('returns the same state when it does not understand action', () => {
    const state = { markdown: 'hello' };
    const action = {
      type: 'FAKE',
      payload: 'hello'
    };
    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('updates the title state when it gets an UPDATE_MARKDOWN action', () => {
    const state = { markdown: 'work' };
    const action = updateMarkdown('ohmahgawd');

    const newState = reducer(state, action);

    expect(newState).toEqual({ markdown: 'ohmahgawd' });
  });
});
