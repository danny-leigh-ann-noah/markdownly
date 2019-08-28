import { connect } from 'react-redux';
import Markdown from '../components/Markdown';
import { getMarkdown } from '../selectors/markdownSelector';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

export default connect(mapStateToProps)(Markdown);
