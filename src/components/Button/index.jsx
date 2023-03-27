import React from 'react';
import './button.css';

function Button(props) {
    return (
        <button onClick={props.onTouch} className='button'>
            {props.children}
        </button>

    )
}

export default Button;