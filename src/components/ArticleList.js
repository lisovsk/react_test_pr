import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion';
import { connect } from 'react-redux';

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string
      })
    ).isRequired,
    //from accordion
    toggleOpenItem: PropTypes.func.isRequired,
    openItemID: PropTypes.string
  };
  render() {
    const {
      articles,
      toggleOpenItem: toggleOpenArticle,
      openItemID: openArticleID
    } = this.props;
    const articleElems = articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openArticleID}
          toggleOpen={toggleOpenArticle.bind(this, article.id)}
        />
      </li>
    ));

    return <ul>{articleElems}</ul>;
  }
}
export default connect(state => ({
  articles: state.articles
}))(accordion(ArticleList));
