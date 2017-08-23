import React, {Component} from 'react';
import validation from '../decorators/validation'

function Input(props) {
    let {value, handleChange, type, errorClass} = props

    return (
        <div>
            <input type = {type} value = {value} onChange = {handleChange} className = {errorClass}/>
        </div>
    );
}

export default validation(Input)