import { render, screen } from '@testing-library/react';
import Tab from '../components/Tab';

describe('Tab', () => {
    test('Test for Tab component', () => {
        render(<Tab />);
        const tabName = screen.getByText(/Compte/);
        expect(tabName).toBeInTheDocument();
        expect.not.stringContaining('Profile');
    });
});