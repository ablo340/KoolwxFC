import { render, screen } from '@testing-library/react';
import Auth from '../components/Auth';

describe('Auth', () => {
    test('Test for Auth component', () => {
        render(<Auth />);
        const button = screen.getByText(/Connect/);
        const username = screen.getByPlaceholderText(/username/);
        const password = screen.getByPlaceholderText(/password/);
        expect(button).toBeInTheDocument();
        expect(username).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    });
});
