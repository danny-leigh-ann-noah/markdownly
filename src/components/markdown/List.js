import React from 'react';
import PropTypes from 'prop-types';

function List({ markdowns, onDelete }) {
  const markdownElements = markdowns.map((markdown) => (
    <li key={markdown.id}>
      <a>{markdown.title}</a>
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
  onDelete: PropTypes.func.isRequired
};

export default List;
