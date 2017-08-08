import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

// export default function Article(props) {
//     const {article} = props;
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }

export default class Article extends Component {
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

        this.state = {
            isOpen: false
        }
    }
    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }
    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} />
            </div>
        )

    }
    
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}