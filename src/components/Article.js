import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

// export default function Article(props) {
//     const {article} = props;
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
        // article: PropTypes.number
    }
    constructor(props) {
        super(props);
    }
    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
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
                <CommentList comments = {article.comments} />
            </div>
        )

    }
}
export default toggleOpen(Article);