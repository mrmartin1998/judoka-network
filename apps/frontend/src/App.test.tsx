import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Judoka Network heading', () => {
    render(<App />);
    const heading = screen.getByText(/Judoka Network/i);
    expect(heading).toBeInTheDocument();
  });

  it('displays the judo emoji', () => {
    render(<App />);
    const emoji = screen.getByText(/🥋/);
    expect(emoji).toBeInTheDocument();
  });
});
