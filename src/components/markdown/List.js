import React from 'react';
import PropTypes from 'prop-types';

function List({ markdowns }) {
  const markdownElements = markdowns.map((markdown) => (
    <li key={markdown}>
      <h3>{markdown}</h3>
    </li>
  ));
  return (
    <ul>
      {markdownElements}
    </ul>
  );
}

List.propTypes = {
  markdowns: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;
