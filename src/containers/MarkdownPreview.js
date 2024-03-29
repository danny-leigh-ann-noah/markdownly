import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getMarkdown } from '../selectors/markdownSelector';
import { updateMarkdown } from '../actions/updateMarkdown';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
