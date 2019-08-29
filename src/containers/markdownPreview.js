import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getIndex } from '../selectors/markdownSelector';
import { updateIndex } from '../actions/updateIndex';
import { getDocument } from '../selectors/markdownDocumentSelector';

const mapStateToProps = state => ({
  index: getIndex(state),
  document: getDocument(state)
});

const mapDispatchToProps = dispatch => ({
  updateIndex({ target }) {
    dispatch(updateIndex(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
