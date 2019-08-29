import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddDocument({ onSubmit }) {
  const [title, setTitle] = useState('');

  return (
    <form onSubmit={(e) => onSubmit(e, title)}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button>Add Document</button>
    </form>
  );
}

AddDocument.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddDocument;
