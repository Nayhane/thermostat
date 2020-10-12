import React from 'react';
import { shallow } from 'enzyme';

import TemperatureBox from './TemperatureBox';

describe('TemperatureBox', () => {
    it("renders TemperatureBox without props", () => {
        shallow(<TemperatureBox />);
    });
});