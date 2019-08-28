import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';

export default function Document({ markdown, updateMarkdown }) {
  return (
      <>
        <div className={styles.Document}>
          <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};
