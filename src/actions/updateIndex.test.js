import { updateIndex, saveDocument, UPDATE_INDEX, SAVE_DOCUMENT, deleteDocument, DELETE_DOCUMENT } from './updateIndex';

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

  it('creates an DELETE_DOCUMENT action', () => {
    const state = [
      { id: 1, title: 'title test', body: 'body test' }, 
      { id: 2, title: 'title test', body: 'body test' },
      { id: 3, title: 'title test', body: 'body test' }
    ];
    const action = deleteDocument(state[1]);
  

    expect(action).toEqual({
      type: DELETE_DOCUMENT,
      payload: { id: 2, title: 'title test', body: 'body test' }
    });
  });
});
