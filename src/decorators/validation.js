import React, {Component} from 'react'
import './validation.css'

export default (OriginalComponent) => class validation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            errorClass: ''
        }
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} handleChange = {this.handleChange} errorClass = {this.state.errorClass}/>
    }
    
    handleChange = (ev) => {
        const {dataMax:max, dataMin:min} = this.props
        let value = ev.target.value;
        (value.length > max || value.length < min) ? this.setState({ errorClass: 'ValidationError' }) : this.setState({errorClass: ''})
        this.setState({
            value: value
        })
    }
}