import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ document, updateBody }) {
  return (
    <textarea className={styles.Editor} value={document.body} onChange={updateBody} />
  );
}

Editor.propTypes = {
  document: PropTypes.object.isRequired,
  updateBody: PropTypes.func.isRequired
};

export default Editor;
