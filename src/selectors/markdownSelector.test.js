import { getIndex } from './markdownSelector';

describe('index', () => {
  it('gets index from redux state', () => {
    const state = {
      markdownReducer: {
        index: 0
      }
    };

    const index = getIndex(state);
    expect(index).toEqual(0);
  });
});

