import { getMarkdownList } from './markdownListSelector';

describe('markdownList', () => {
  it('gets markdownList from redux state', () => {
    const state = {
      markdownReducer: { documents: [{
        id: '1',
        title: 'Test',
        body: 'Test 1'
      }] }
    };
    
    const documents = getMarkdownList(state);
    expect(documents).toEqual([{
      id: '1',
      title: 'Test',
      body: 'Test 1'
    }]);
  });
});
