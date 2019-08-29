import { getMarkdownList } from './markdownListSelector';

describe('markdownList', () => {
  it('gets markdownList from redux state', () => {
    const state = {
      markdownListReducer: { markdownFiles: [{
        id: '1',
        title: 'Test',
        body: 'Test 1'
      }] }
    };

    const markdownFiles = getMarkdownList(state);
    expect(markdownFiles).toEqual([{
      id: '1',
      title: 'Test',
      body: 'Test 1'
    }]);
  });
});
