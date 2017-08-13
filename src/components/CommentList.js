import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {
        comments: [
            {
                id: "sdaasd",
                user: "You",
                text: "Your comment"
            }
        ]
    }
    render() {
        const {comments, isOpen, toggleOpen} = this.props;
        const commensElems = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>)
        const textBtn = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                {commensElems 
                    ? 
                    <button onClick = {toggleOpen}>
                        {textBtn}
                    </button>
                    : 
                    null}
                {isOpen 
                    ?
                    <ul>
                        {commensElems}
                    </ul>
                    :
                    null}
            </div>
        )
    }
}
export default toggleOpen(CommentList)