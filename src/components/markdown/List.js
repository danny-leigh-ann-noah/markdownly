import React from 'react';
import PropTypes from 'prop-types';

function List({ markdownFiles, deleteDocument, onLoad }) {
  const markdownElements = markdownFiles.map((markdown) => (
    <li key={markdown.id}>
      <button onClick={onLoad}>{markdown.title}</button>
      <button onClick={() => deleteDocument(markdown.id)}>Delete</button>
    </li>
  ));
  return (
    <ul>
      {markdownElements}
    </ul>
  );
}

List.propTypes = {
  markdownFiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteDocument: PropTypes.func,
  onLoad: PropTypes.func
};

export default List;
