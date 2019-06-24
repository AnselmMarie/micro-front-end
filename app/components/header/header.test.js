/* Node Modules */
import React from 'react';
import {cleanup, render} from '@testing-library/react';
/* Components */
import Header from './index';

afterEach(cleanup);

describe('<Header />', () => {

    test('Header Renders', () => {
        const wrapper = render(<Header />);
        expect(wrapper).toBeTruthy();
    });

    test('Header displays Cart', () => {

    });

    test('Header displays Total', () => {

    });

});
