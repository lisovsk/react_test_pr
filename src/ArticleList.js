import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    const {articles} = props;
    const articleElems = articles.map((article) => <li key = {article.id}><Article article = {article} /></li>)

    return (
        <ul>
            {articleElems}
        </ul>
    )
}