import { getMarkdown } from './markdownSelector';

describe('markdown', () => {
  it('gets markdown from redux state', () => {
    const state = {
      markdownReducer: {
        markdown: 'hello'
      }
    };

    const markdown = getMarkdown(state);
    expect(markdown).toEqual('hello');
  });
});
