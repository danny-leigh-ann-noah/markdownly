import React from 'react';
import PropTypes from 'prop-types';

function List({ markdownFiles, onDelete, onLoad }) {
  const markdownElements = markdownFiles.map((markdown) => (
    <li key={markdown.id}>
      <button onClick={onLoad}>{markdown.title}</button>
      <button onClick={onDelete}>Delete</button>
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
  onDelete: PropTypes.func,
  onLoad: PropTypes.func
};

export default List;
