import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }
    render() {
        const {comments} = this.props;
        const commensElems = comments ? comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>) : null
        const {isOpen} = this.state;
        const textBtn = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                {commensElems 
                    ? 
                    <button onClick = {this.toggleOpen}>
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
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}