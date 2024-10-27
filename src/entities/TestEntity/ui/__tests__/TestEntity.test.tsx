import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TestEntity from '../TestEntity';

describe('TestEntity', () => {
  it('renders initial count of 0', () => {
    render(<TestEntity />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments count when increment button is clicked', () => {
    render(<TestEntity />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', () => {
    render(<TestEntity />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  it('allows multiple increments and decrements', () => {
    render(<TestEntity />);
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
