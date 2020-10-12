import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
    it("renders Button without props", () => {
        shallow(<Button />);
    });

    // it('Button click should call callBack', () => {
    //     const clickFn = jest.fn();
    //     const component = shallow(<Button onClick={clickFn} />);
    //     component
    //         .find('button')
    //         .simulate('click');
    //     expect(clickFn).toHaveBeenCalled();
    // });
});