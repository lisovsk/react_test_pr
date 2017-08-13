import React from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList({comments = [], isOpen, toggleOpen}) {
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
export default toggleOpen(CommentList)