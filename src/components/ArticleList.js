import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component  {
    render() {
        const {articles, toggleOpenArticle, openArticleID} = this.props
        const articleElems = articles.map((article) => <li key = {article.id}>
            <Article article = {article}
            isOpen = {article.id === openArticleID}
            toggleOpen = {toggleOpenArticle.bind(this, article.id)}
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