import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';

export default function Document({ document, updateBody }) {
  return (
      <>
        <div className={styles.Document}>
          <Editor document={document} updateBody={updateBody} />
          <Preview markdown={document.body} />
        </div>
      </>
  );
}

Document.propTypes = {
  updateBody: PropTypes.func.isRequired,
  document: PropTypes.object.isRequired
};
