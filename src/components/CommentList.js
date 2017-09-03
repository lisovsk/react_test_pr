import React from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import Input from './Input';
import Textarea from './Textarea';

function CommentList({ comments = [], isOpen, toggleOpen }) {
  const commensElems = comments.map(comment => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ));
  const textBtn = isOpen ? 'hide comments' : 'show comments';
  return (
    <div>
      {commensElems ? <button onClick={toggleOpen}>{textBtn}</button> : null}
      {isOpen ? (
        <div>
          <ul>{commensElems}</ul>
          <Input type={'text'} dataMin={5} dataMax={10} />
          <Textarea dataMin={10} dataMax={50} />
        </div>
      ) : null}
    </div>
  );
}
export default toggleOpen(CommentList);
