import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticleCart from './ArticleCart'

class App extends Component {
    render() {
        return (
            <div>
                <ArticleList articles = {this.props.articles} />
                <ArticleCart articles = {this.props.articles} /> 
            </div>
        )
    }
}

export default App