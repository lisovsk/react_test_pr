import React, {Component as ReactComponent} from 'react';
import PropTypes from 'prop-types'

export default (OriginalComponent) => class WrappedAccordion extends ReactComponent {
    constructor(props) {
        super(props)
        this.state = {
            openItemID: props.defaultOpenId
        }
    } 
    // state = {
    //     openItemID: null,
    // }

    toggleOpenItem = (openItemID) => {
        if(openItemID === this.state.openItemID) {
            this.setState({
                openItemID: 'close_current',
            }) 
        } else {
            this.setState({
                openItemID: openItemID,
            })
        }
    }
    
    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem} />
    }
}