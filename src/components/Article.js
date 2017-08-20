import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        //from toggleOpen
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps (nextProps) {
        console.log(`---, ${this.props.isOpen} -- ${nextProps.isOpen}` )
    }

    componentWillMount() {
        console.log("---, mounting")
    }

    componentDidMount() {
        console.log("---, mounted")
    }
    
    setContainerRef = ref => {
        this.container = ref
        console.log('---', ref)
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}!!!</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }
    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} ref = {this.setCommentsRef}/>
            </div>
        )

    }

    setCommentsRef = ref => {
        console.log('---', findDOMNode(ref))
    }
}
export default Article