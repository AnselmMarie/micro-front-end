/* Node Modules */
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
/* Module */
import Navigation from './navigation';

afterEach(cleanup);

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
    ui,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
) {
    return {
        ...render(<Router history={history}>{ui}</Router>),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    }
}


describe('<Naivgation />', () => {

    test('Enter the homepage route', () => {
        const { getByTestId } = renderWithRouter(<Navigation />);
        expect(getByTestId('Homepage')).toBeTruthy();
    });

    test('Enter the Order route', () => {
        // const { getByTestId } = renderWithRouter(<Navigation, {
        // route: '/order'
        // } />);
        // expect(getByTestId('Homepage')).toBeTruthy();
    });

    test('Enter the Unknown route', () => {
        // const { getByTestId } = renderWithRouter(<Navigation, {
        // route: '/testing-here'
        // } />);
        // expect(getByTestId('Homepage')).toBeTruthy();
    });

});