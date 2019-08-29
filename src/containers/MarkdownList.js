import { connect } from 'react-redux';
import List from '../components/markdown/List';
import { getMarkdownList } from '../selectors/markdownSelector';

const mapStateToProps = state => ({
  markdownFiles: getMarkdownList(state)
});

export default connect(
  mapStateToProps
)(List);
