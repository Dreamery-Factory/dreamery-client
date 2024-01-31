import Home from '@/app/(home)/page';
import BottomNav from '@/components/layout/BottomNav';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
  it('renders Home Component', () => {
    render(<Home />);
    const text = screen.getByText(/HomeClient/i);

    expect(text).toBeInTheDocument();
  });
});

describe('Bottom Nav', () => {
  it('버튼을 클릭하면 일기쓰기 페이지로 이동한다,', () => {
    render(<BottomNav />);
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', '/post');
  });

  it('버튼에는 + 아이콘이 렌더링 된다.', () => {
    render(<BottomNav />);
    const addIcon = document.querySelector('img') as HTMLImageElement;
    expect(addIcon.alt).toContain('일기 쓰기로 이동');
  });
});
