import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';

export default function Document({ document, updateDocumentBody }) {
  return (
      <>
        <div className={styles.Document}>
          <Editor document={document} updateDocumentBody={updateDocumentBody} />
          <Preview markdown={document.body} />
        </div>
      </>
  );
}

Document.propTypes = {
  updateDocumentBody: PropTypes.func.isRequired,
  document: PropTypes.object.isRequired
};
