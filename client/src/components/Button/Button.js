import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import { StylesProvider } from "@material-ui/core/styles";
import { IndeterminateCheckBox } from '@material-ui/icons';

import './styles.css';

const Button = props => {
    const { onClick, isAdd } = props

    return (
        <StylesProvider injectFirst>
            <IconButton aria-label='delete' onClick={onClick}>
                {isAdd ? (
                    <AddBox className='icon' fontSize='large' />
                ) : (
                        <IndeterminateCheckBox className='icon' fontSize='large' />
                    )}
            </IconButton>
        </StylesProvider>
    )
}

export default Button;