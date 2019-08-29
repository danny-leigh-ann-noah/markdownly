import React from 'react';
import MarkdownPreview from '../containers/MarkdownPreview';
import MarkdownList from '../containers/MarkdownList';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <MarkdownList />
      <MarkdownPreview />
    </>
  );
}
