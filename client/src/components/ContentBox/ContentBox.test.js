import React from 'react';
import { shallow } from 'enzyme';

import ContentBox from './ContentBox';

describe('ContentBox', () => {
    it("renders ContentBox without props", () => {
        shallow(<ContentBox />);
    });
});