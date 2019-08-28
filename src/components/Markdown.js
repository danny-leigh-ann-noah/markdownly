import React from 'react';
import PropTypes from 'prop-types';
import Preview from '../components/markdown/Preview';

export default function Markdown({ markdown }) {
  return (
    <Preview markdown={markdown} />
  );
}

Markdown.propTypes = {
  markdown: PropTypes.object.isRequired
};
