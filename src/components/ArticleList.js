import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component  {
        static propTypes = {
            articles: PropTypes.arrayOf(
                PropTypes.shape(
                    {
                        id: PropTypes.string.isRequired,
                        title: PropTypes.string.isRequired,
                        text: PropTypes.string
                    }
                )
            ).isRequired,
            //from accordion
            toggleOpenItem: PropTypes.func.isRequired,
            openItemID: PropTypes.string
    }
    render() {
        const {articles, toggleOpenItem : toggleOpenArticle, openItemID : openArticleID} = this.props
        const articleElems = articles.map((article) => <li key = {article.id} onClick = {toggleOpenArticle.bind(this, article.id)} >
            <Article article = {article}
            isOpen = {article.id === openArticleID}
             />
        </li>)

        return (
            <ul>
                {articleElems}
            </ul>
        )
    }

}
export default accordion(ArticleList)