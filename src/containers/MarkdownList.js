import { connect } from 'react-redux';
import List from '../components/markdown/List';
import { getMarkdownList } from '../selectors/markdownSelector';
import { deleteDocument } from '../actions/updateIndex';

const mapStateToProps = state => ({
  markdownFiles: getMarkdownList(state)
});

const mapDispatchToProps = dispatch => ({
  deleteDocument(index) {
    dispatch(deleteDocument(index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
