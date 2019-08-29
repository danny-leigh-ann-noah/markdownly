import { updateIndex, saveDocument, UPDATE_INDEX, SAVE_DOCUMENT } from './updateIndex';

describe('updateIndex', () => {
  it('creates an UPDATE_INDEX action', () => {
    const action = updateIndex('yay');

    expect(action).toEqual({
      type: UPDATE_INDEX,
      payload: 'yay'
    });
  });

  it('creates an SAVE_DOCUMENT action', () => {
    const action = saveDocument({ id: 1, title: 'title test', body: 'body test' });

    expect(action).toEqual({
      type: SAVE_DOCUMENT,
      payload: { id: 1, title: 'title test', body: 'body test' }
    });
  });

});
