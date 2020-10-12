import React, { useState, useEffect, useCallback } from 'react';
import { connect } from "react-redux";
import { fetchTemp, patchTemperature } from '@store/api';
import { format } from 'date-fns';
import debounce from 'lodash/debounce';
import { CloudTwoTone } from '@material-ui/icons';
import { Battery30TwoTone } from '@material-ui/icons';
import { AccessTimeTwoTone } from '@material-ui/icons';

import ContentBox from '@components/ContentBox/ContentBox';
import TemperatureBox from '@components/TemperatureBox/TemperatureBox';

import './App.css'

const App = props => {
    const {
        dispatch,
        currentTemp,
        currentSetpoint,
        timestamp,
    } = props;
    const [formattedTimestamp, setFormattedTimestamp] = useState('');
    const date = format(new Date(), 'd LLL yyyy');
    const time = format(new Date(), 'kk:mm');

    useEffect(() => {
        setInterval(() => dispatch(fetchTemp()), 1000);
    }, []);

    useEffect(() => {
        if (timestamp) {
            const formatDate = format(new Date(timestamp), 'd LLL yy kk:mm:ss');
            setFormattedTimestamp(formatDate);
        }
    }, [timestamp]);

    const updateTemp = useCallback(
        debounce((current, updateTemp) => {
            dispatch(patchTemperature(current, updateTemp));
        }), []
    );

    const onClick = useCallback(
        values => {
            let newTemperature = currentSetpoint;

            if (values === 'isAdd') {
                newTemperature = currentSetpoint + 0.5;
            } else {
                newTemperature = currentSetpoint - 0.5;
            }

            updateTemp(currentSetpoint, newTemperature);
        },
        [currentSetpoint],
    );

    return (
        <div className='app'>
            <div className='generic-info'>
                <ContentBox title={time} body={date} />
                <ContentBox
                    title='Asmterdam'
                    body='16,0°'
                    icon={<CloudTwoTone className='icon' />}
                />
                <ContentBox
                    body='2,48m³'
                    title='Gas today'
                    icon={<Battery30TwoTone className='icon' />}
                />
                <ContentBox
                    title='Last update at'
                    body={formattedTimestamp}
                    icon={<AccessTimeTwoTone className='icon' />}
                />
            </div>
            <TemperatureBox
                currentTemp={currentTemp}
                currentSetpoint={currentSetpoint}
                onClick={onClick}
                onClickAdd={() => onClick('isAdd')}
            />
        </div>
    );
}


const mapStateToProps = state => {
    return {
        currentTemp: state.data.currentTemp,
        currentSetpoint: state.data.currentSetpoint,
        timestamp: state.data.timestamp
    };
}

export default connect(mapStateToProps)(App);