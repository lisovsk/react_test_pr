import React, {Component} from 'react';
import validation from '../decorators/validation'

function Textaria(props) {
    let {value, handleChange, errorClass} = props

    return (
        <div>
            <textarea value = {value} onChange = {handleChange} className = {errorClass}></textarea>
        </div>
    );
}

export default validation(Textaria)