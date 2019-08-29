import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';
import AddDocument from './AddDocument';

export default function Document({ document, updateDocumentBody, saveDocument }) {
  return (
      <>
        <div className={styles.Document}>
          <AddDocument title={document.title} onSubmit={saveDocument} />
          <Editor document={document} updateDocumentBody={updateDocumentBody} />
          <Preview markdown={document.body} />
        </div>
      </>
  );
}

Document.propTypes = {
  updateDocumentBody: PropTypes.func.isRequired,
  document: PropTypes.object.isRequired,
  saveDocument: PropTypes.func.isRequired
};
