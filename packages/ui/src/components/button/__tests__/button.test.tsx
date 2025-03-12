import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('Button 组件', () => {
  it('应该正确渲染默认按钮', () => {
    render(<Button>测试按钮</Button>);
    const button = screen.getByRole('button', { name: '测试按钮' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-neutral-900');
  });

  it('应该正确渲染不同变体的按钮', () => {
    const { rerender } = render(<Button variant="primary">主要按钮</Button>);
    let button = screen.getByRole('button', { name: '主要按钮' });
    expect(button).toHaveClass('bg-primary-500');

    rerender(<Button variant="destructive">危险按钮</Button>);
    button = screen.getByRole('button', { name: '危险按钮' });
    expect(button).toHaveClass('bg-red-500');

    rerender(<Button variant="outline">轮廓按钮</Button>);
    button = screen.getByRole('button', { name: '轮廓按钮' });
    expect(button).toHaveClass('border-neutral-200');

    rerender(<Button variant="secondary">次要按钮</Button>);
    button = screen.getByRole('button', { name: '次要按钮' });
    expect(button).toHaveClass('bg-neutral-100');

    rerender(<Button variant="ghost">幽灵按钮</Button>);
    button = screen.getByRole('button', { name: '幽灵按钮' });
    expect(button).toHaveClass('hover:bg-neutral-100');

    rerender(<Button variant="link">链接按钮</Button>);
    button = screen.getByRole('button', { name: '链接按钮' });
    expect(button).toHaveClass('text-neutral-900');
  });

  it('应该正确渲染不同尺寸的按钮', () => {
    const { rerender } = render(<Button size="default">默认尺寸</Button>);
    let button = screen.getByRole('button', { name: '默认尺寸' });
    expect(button).toHaveClass('h-10');

    rerender(<Button size="sm">小尺寸</Button>);
    button = screen.getByRole('button', { name: '小尺寸' });
    expect(button).toHaveClass('h-9');

    rerender(<Button size="lg">大尺寸</Button>);
    button = screen.getByRole('button', { name: '大尺寸' });
    expect(button).toHaveClass('h-11');

    rerender(<Button size="icon">图标按钮</Button>);
    button = screen.getByRole('button', { name: '图标按钮' });
    expect(button).toHaveClass('w-10');
  });

  it('应该正确处理禁用状态', () => {
    render(<Button disabled>禁用按钮</Button>);
    const button = screen.getByRole('button', { name: '禁用按钮' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });

  it('应该正确处理点击事件', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>可点击按钮</Button>);
    const button = screen.getByRole('button', { name: '可点击按钮' });

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('应该正确处理 asChild 属性', () => {
    render(
      <Button asChild>
        <a href="https://example.com">链接按钮</a>
      </Button>
    );

    const link = screen.getByRole('link', { name: '链接按钮' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveClass('inline-flex');
  });
});
