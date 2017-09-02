import React, { Component, PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import toggleOpen from '../../decorators/toggleOpen';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.css';

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    //from toggleOpen
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  // componentWillReceiveProps (nextProps) {
  //     console.log(`---, ${this.props.isOpen} -- ${nextProps.isOpen}` )
  // }

  // componentWillMount() {
  //     console.log("---, mounting")
  // }

  // componentDidMount() {
  //     console.log("---, mounted")
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //     return nextProps.isOpen !== this.props.isOpen
  // }

  setContainerRef = ref => {
    this.container = ref;
    // console.log('---', ref)
  };

  render() {
    console.log('---', 'update article');
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}!!!</h3>
        <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={300}
          component="div"
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  }
  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <div>
        <section>{article.text}</section>
        <CommentList comments={article.comments} ref={this.setCommentsRef} />
      </div>
    );
  }

  setCommentsRef = ref => {
    // console.log('---', findDOMNode(ref))
  };
}
export default Article;
