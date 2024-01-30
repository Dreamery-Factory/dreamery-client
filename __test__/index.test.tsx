import Home from '@/app/(home)/page';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
  it('renders Home Component', () => {
    render(<Home />);
    const text = screen.getByText(/HomeClient/i);

    expect(text).toBeInTheDocument();
  });
});
