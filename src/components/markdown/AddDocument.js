import React from 'react';
import PropTypes from 'prop-types';

function AddDocument({ title, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name={title} />
      <button>Add Document</button>
    </form>
  );
}

AddDocument.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddDocument;
