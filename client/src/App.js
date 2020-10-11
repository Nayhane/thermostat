import React, { useState, useEffect, useCallback } from 'react';
import { connect } from "react-redux";
import { fetchTemp, patchTemperature } from '@store/api';
import { format } from 'date-fns'
import { CloudTwoTone } from '@material-ui/icons';
import { DateRangeTwoTone } from '@material-ui/icons';
import { Battery30TwoTone } from '@material-ui/icons';
import { AccessTimeTwoTone } from '@material-ui/icons';

import Button from '@components/Button/Button';
import ContentBox from '@components/ContentBox/ContentBox';

import './App.css'

const App = props => {
    const { dispatch, currentTemp, currentSetpoint, timestamp, error } = props
    const [formattedTimestamp, setFormattedTimestamp] = useState('')
    const date = format(new Date(), 'd LLL yyyy');
    const time = format(new Date(), 'kk:mm');

    useEffect(() => {
        setInterval(() => dispatch(fetchTemp()), 2000)
    }, [])

    useEffect(() => {
        if (error) {
            dispatch(fetchTemp())
        }
    }, [error])


    useEffect(() => {
        if (timestamp) {
            const formatDate = format(new Date(timestamp), 'd LLL yy kk:mm:ss');
            setFormattedTimestamp(formatDate);
        }
    }, [timestamp])

    const setTemperature = useCallback(
        values => {
            let temperature = currentSetpoint;
            const updateTime = Date.now();

            if (values === 'isAdd') {
                temperature = currentSetpoint + 0.5;
            } else {
                temperature = currentSetpoint - 0.5;
            }
            return dispatch(patchTemperature(currentTemp, temperature, updateTime));
        },
        [currentTemp, currentSetpoint],
    )

    return (
        <div className='app'>
            <div className='generic-info'>
                <ContentBox title={time} body={date} />
                <ContentBox title='Asmterdam' body='16,0°' icon={<CloudTwoTone />} />
                <ContentBox body='2,48m³' title='Gas today' icon={<Battery30TwoTone />} />
                <ContentBox title='Last update at' body={formattedTimestamp} icon={<AccessTimeTwoTone />} />
            </div>
            <div className='temp-container'>
                <div className='temperature'>
                    <ContentBox title={`${currentTemp}°`} body='Room temperature' />
                    <ContentBox title={`${currentSetpoint}°`} body='set temperature' />
                </div>
                <div className='button'>
                    <Button onClick={setTemperature} />
                    <Button isAdd onClick={() => setTemperature('isAdd')} />
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        error: state.error,
        currentTemp: state.currentTemp,
        currentSetpoint: state.currentSetpoint,
        timestamp: state.timestamp
    };
}

export default connect(mapStateToProps)(App);