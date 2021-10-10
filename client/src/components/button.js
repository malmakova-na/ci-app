import { Link } from 'react-router-dom';
import {Fragment, useEffect } from 'react';
import './button.css';

export const Button = ({text, type, onClick, buttonStyle, buttonSize, icon, mode, link}) => {
    const STYLES = [
        'button', 'greyButton', 'yellowButton', 'noBodyButton', 'button_position-r'
    ];

    const SIZES = [
        'btn','btn--s','btn--m', 'btn--xs--1', 'btn--xm',
        'btn--xs', 'btn--xxs','btn--m--1'
    ];
    
    const ckeckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle :  STYLES[0]; 
    const ckeckButtonSize = STYLES.includes(buttonStyle) ? buttonSize :  SIZES[0]; 

    const setDefaultButton =  link === undefined || mode;

    return setDefaultButton?
        <button  disabled={mode} className={`button ${ckeckButtonStyle} ${ckeckButtonSize}`} onClick={onClick}>
            {icon}
            <span className={type === 'main'? 'buttonText': ''}>{text}</span>
        </button>:
        <Link to={link} className="button">
            <button  disabled={mode} className={`button ${ckeckButtonStyle} ${ckeckButtonSize}`} onClick={onClick}>
                {icon}
                <span className={type === 'main'? 'buttonText buttonText_media': ''}>{text}</span>
            </button>
        </Link>
}
