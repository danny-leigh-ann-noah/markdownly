import React from 'react';
import PropTypes from 'prop-types';

function AddDocument({ title, submitHandle }) {
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={title} name={title} />
      <button>Add Document</button>
    </form>
  );
}

AddDocument.propTypes = {
  title: PropTypes.string.isRequired,
  submitHandle: PropTypes.func.isRequired
};

export default AddDocument;
