import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders', () => {
    // Mount the App component using Cypress
    cy.mount(<App />);
  });
});
