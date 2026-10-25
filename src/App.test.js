// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaoSketch title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaoSketch/i);
    expect(titleElement).toBeInTheDocument();
});
