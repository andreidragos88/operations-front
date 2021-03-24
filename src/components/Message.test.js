/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Enzyme from 'enzyme';
import Message from './Message';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Message component', () => {
    test('render Fragment component when multiple results', () => {
        const wrapper = shallow(<Message
            message={{
                error: false,
                action: 'output',
                timestamp: 1234,
                result: [{
                    createdAt: "2017-12-12",
                    command: "1+2",
                    result: "3"
                }]
            }} />);
        expect(wrapper.find('p').children()).toHaveLength(1);
    })
})

