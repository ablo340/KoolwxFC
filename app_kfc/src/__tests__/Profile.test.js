import { render, screen } from '@testing-library/react';
import Profile from '../components/Profile';

describe('Profile', () => {
    test('Test for Profile component', () => {
        render(<Profile playerValue={{}}/>);
        const nom = screen.getByText(/Nom/);
        const prenom = screen.getByText(/Prenom/);
        const age = screen.getByText(/Age/);
        expect(nom).toBeInTheDocument();
        expect(prenom).toBeInTheDocument();
        expect(age).toBeInTheDocument();
    });
});
