import React, {Component} from 'react'
import Article from './Article'

export default class ArticleList extends Component  {
    state = {
        openArticleID: null
    }
    render() {
        const {articles} = this.props
        const articleElems = articles.map((article) => <li key = {article.id}>
            <Article article = {article}
            isOpen = {article.id === this.state.openArticleID}
            toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
             />
        </li>)

        return (
            <ul>
                {articleElems}
            </ul>
        )
    }

    toggleOpenArticle(openArticleID) {
        this.setState({openArticleID}) 
    }
}