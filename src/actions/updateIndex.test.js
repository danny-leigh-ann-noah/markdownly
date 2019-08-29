import { updateIndex, UPDATE_INDEX } from './updateIndex';

describe('updateIndex', () => {
  it('creates an UPDATE_INDEX action', () => {
    const action = updateIndex('yay');

    expect(action).toEqual({
      type: UPDATE_INDEX,
      payload: 'yay'
    });
  });
});
