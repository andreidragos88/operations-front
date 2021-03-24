/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Enzyme from 'enzyme';
import Messages from './Messages';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Messages component', () => {
    test('render Message component', () => {
        const wrapper = shallow(<Messages
            messages={[{
            action: 'output',
            timestamp: 1234
            }]} />);
        expect(wrapper.find('Message').length).toEqual(1);
    })
})

