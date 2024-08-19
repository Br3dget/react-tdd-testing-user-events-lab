import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from "../App";

describe('Newsletter Signup Form', () => {
  test('renders form elements', () => {
    render(<App />);
    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByText(/Submit/)).toBeInTheDocument();
  });

  test('updates name input field', () => {
    render(<App />);
    const nameInput = screen.getByLabelText(/Name/);
    userEvent.type(nameInput, 'John Doe');
    expect(nameInput).toHaveValue('John Doe');
  });

  test('updates email input field', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/Email/);
    userEvent.type(emailInput, 'john.doe@example.com');
    expect(emailInput).toHaveValue('john.doe@example.com');
  });

  test('selects and unselects checkboxes', () => {
    render(<App />);
    const techCheckbox = screen.getByLabelText(/Technology/);
    const scienceCheckbox = screen.getByLabelText(/Science/);

    userEvent.click(techCheckbox);
    userEvent.click(scienceCheckbox);

    expect(techCheckbox).toBeChecked();
    expect(scienceCheckbox).toBeChecked();

    userEvent.click(techCheckbox);

    expect(techCheckbox).not.toBeChecked();
    expect(scienceCheckbox).toBeChecked();
  });

  test('submits form and shows personalized message', () => {
    render(<App />);
    const nameInput = screen.getByLabelText(/Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const techCheckbox = screen.getByLabelText(/Technology/);
    const submitButton = screen.getByText(/Submit/);

    userEvent.type(nameInput, 'John Doe');
    userEvent.type(emailInput, 'john.doe@example.com');
    userEvent.click(techCheckbox);
    userEvent.click(submitButton);

    expect(screen.getByText(/Thank you for signing up, John Doe!/)).toBeInTheDocument();
    expect(screen.getByText(/Your interests: Technology/)).toBeInTheDocument();
  });
});