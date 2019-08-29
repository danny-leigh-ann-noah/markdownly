import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ document, updateDocumentBody }) {
  return (
    <textarea className={styles.Editor} value={document.body} onChange={updateDocumentBody} />
  );
}

Editor.propTypes = {
  document: PropTypes.object.isRequired,
  updateDocumentBody: PropTypes.func.isRequired
};

export default Editor;
