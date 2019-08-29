import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getIndex, getDocument } from '../selectors/markdownSelector';
import { updateIndex, updateDocumentBody, saveDocument } from '../actions/updateIndex';

const mapStateToProps = state => ({
  index: getIndex(state),
  document: getDocument(state)
});

const mapDispatchToProps = dispatch => ({
  updateIndex({ target }) {
    dispatch(updateIndex(target.value));
  },
  updateDocumentBody({ target }) {
    dispatch(updateDocumentBody(target.value));
  },
  saveDocument(event, title) {
    event.preventDefault();
    dispatch(saveDocument(title));
  }
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
