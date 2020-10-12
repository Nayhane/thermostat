import React from 'react';
import { StylesProvider } from "@material-ui/core/styles";

import './styles.css';

const ContentBox = props => {
    const { title, body, icon } = props;

    return (
        <StylesProvider injectFirst>
            <div className='box'>
                <div>
                    <div className={icon ? 'title' : 'time'}>{title}</div>
                    {icon && (
                        <>
                            {icon}
                        </>
                    )}
                    <div className='body'>{body}</div>
                </div>
            </div>
        </StylesProvider>
    );
};

export default ContentBox;