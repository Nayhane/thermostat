import React from 'react';
import { ChangeHistoryTwoTone } from '@material-ui/icons';
import { EventTwoTone } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';

import Button from '../Button/Button';
import './styles.css';

const TemperatureBox = props => {
    const { currentTemp, currentSetpoint, onClickAdd, onClick } = props;

    return (
        <div className='container'>
            <div className='temperature'>
                {currentTemp ? (
                    <>
                        <div className='current-temp'>
                            {`${currentTemp}°`}
                        </div>
                        <div className='new-temp'>
                            <ChangeHistoryTwoTone className='icon-up' />
                            {`${currentSetpoint}°`}
                        </div>
                    </>

                ) : (
                        <CircularProgress className='loader' />

                    )}
            </div>
            <div className='button'>
                <Button onClick={onClick} />
                <Button isAdd onClick={onClickAdd} />
            </div>
            <div className='agenda'>
                <div> Agenda free</div>
                <EventTwoTone className='icon-agenda' />
            </div>
        </div>
    );
};

export default TemperatureBox;