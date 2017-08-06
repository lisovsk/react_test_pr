import React from 'react'

export default function ArticleList(props) {
    const {comment} = props;
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}