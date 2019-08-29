import React from 'react';
import PropTypes from 'prop-types';

function List({ markdowns, onDelete, onLoad }) {
  const markdownElements = markdowns.map((markdown) => (
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
  markdowns: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired
};

export default List;
