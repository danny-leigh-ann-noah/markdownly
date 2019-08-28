import { updateMarkdown, UPDATE_MARKDOWN } from './updateMarkdown';

describe('updateMarkdown', () => {
  it('creates an UPDATE_MARKDOWN action', () => {
    const action = updateMarkdown('yay');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'yay'
    });
  });
});
