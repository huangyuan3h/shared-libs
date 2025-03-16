import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../header';

// 模拟window.matchMedia
const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe('Header', () => {
  beforeEach(() => {
    // 默认设置为桌面视图
    mockMatchMedia(false);
  });

  it('renders leftContent correctly', () => {
    const leftContentTestId = 'test-left-content';
    render(
      <Header
        leftContent={
          <div data-testid={leftContentTestId}>Site Logo and Name</div>
        }
      />,
    );

    expect(screen.getByTestId(leftContentTestId)).toBeInTheDocument();
  });

  it('renders menu in desktop view', () => {
    const menuTestId = 'test-menu';
    render(<Header menu={<div data-testid={menuTestId}>Menu Items</div>} />);

    expect(screen.getByTestId(menuTestId)).toBeInTheDocument();
  });

  it('renders right content when provided', () => {
    const rightContentTestId = 'test-right-content';
    render(
      <Header
        rightContent={<div data-testid={rightContentTestId}>User Info</div>}
      />,
    );

    expect(screen.getByTestId(rightContentTestId)).toBeInTheDocument();
  });

  it('applies sticky class when sticky prop is true', () => {
    const { container } = render(<Header sticky />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('sticky');
  });

  it('does not show menu button when menu is not provided', () => {
    mockMatchMedia(true); // 设置为移动视图
    render(<Header />);

    // 不应该有菜单按钮
    expect(screen.queryByLabelText('打开菜单')).not.toBeInTheDocument();
  });

  it('shows menu button in mobile view when menu is provided', () => {
    mockMatchMedia(true); // 设置为移动视图
    render(<Header menu={<div>Menu Items</div>} />);

    // 应该有菜单按钮
    expect(screen.getByLabelText('打开菜单')).toBeInTheDocument();
  });

  it('toggles mobile menu when menu button is clicked', () => {
    mockMatchMedia(true); // 设置为移动视图
    const menuTestId = 'test-menu';

    render(<Header menu={<div data-testid={menuTestId}>Menu Items</div>} />);

    // 初始状态下，移动菜单应该是隐藏的
    expect(screen.queryByTestId(menuTestId)).not.toBeVisible();

    // 点击菜单按钮
    fireEvent.click(screen.getByLabelText('打开菜单'));

    // 菜单应该显示出来
    expect(screen.getByTestId(menuTestId)).toBeVisible();

    // 再次点击菜单按钮
    fireEvent.click(screen.getByLabelText('关闭菜单'));

    // 菜单应该再次隐藏
    expect(screen.queryByTestId(menuTestId)).not.toBeVisible();
  });
});
