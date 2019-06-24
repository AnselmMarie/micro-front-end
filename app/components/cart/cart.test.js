/* Node Modules */
import React from 'react';
import {cleanup, render} from '@testing-library/react';
/* Components */
import Cart from './index';

afterEach(cleanup);

describe('<Cart />', () => {

    test('Cart Renders', () => {
        const wrapper = render(<Cart/>);
        expect(wrapper).toBeTruthy();
    });

});
