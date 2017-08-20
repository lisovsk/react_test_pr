import React, {Component as ReactComponent} from 'react';
import PropTypes from 'prop-types'

export default (OriginalComponent) => class WrappedAccordion extends ReactComponent {
    
    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.shape(
                {
                    id: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    text: PropTypes.string
                }
            )
        ).isRequired
    }
    
    state = {
        openArticleID: null,
    }

    toggleOpenArticle = (openArticleID) => {
        if(openArticleID === this.state.openArticleID) {
            this.setState({
                openArticleID: 'close_current',
            }) 
        } else {
            this.setState({
                openArticleID: openArticleID,
            })
        }
    }
    
    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }
}