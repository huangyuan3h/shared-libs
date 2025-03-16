import * as React from 'react';
import { cn } from '../../utils/cn';
import { Menu, X } from 'lucide-react';
import { Button } from './button';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 是否固定在顶部
   */
  sticky?: boolean;
  /**
   * 左侧内容（如Logo和网站名称）
   */
  leftContent?: React.ReactNode;
  /**
   * 菜单内容
   */
  menu?: React.ReactNode;
  /**
   * 右侧内容（如登录信息）
   */
  rightContent?: React.ReactNode;
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    { className, sticky = false, leftContent, menu, rightContent, ...props },
    ref,
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    // 监听窗口大小变化，判断是否为移动端
    React.useEffect(() => {
      const checkIsMobile = () => {
        // 使用媒体查询判断是否为移动端，与CSS媒体查询保持一致
        setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      };

      // 初始检查
      checkIsMobile();

      // 添加窗口大小变化监听
      window.addEventListener('resize', checkIsMobile);

      // 清理监听
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }, []);

    // 当窗口大小变化到桌面模式时，关闭移动端菜单
    React.useEffect(() => {
      if (!isMobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }, [isMobile, isMobileMenuOpen]);

    return (
      <header
        ref={ref}
        className={cn(
          'w-full bg-background border-b border-border z-50',
          sticky && 'sticky top-0',
          className,
        )}
        {...props}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* 左侧内容 */}
            {leftContent && (
              <div className="flex items-center">{leftContent}</div>
            )}

            {/* 中间：桌面端菜单 */}
            {menu && !isMobile && (
              <div className="flex-1 flex justify-center ml-8">{menu}</div>
            )}

            {/* 右侧：用户信息或其他内容 */}
            <div className="flex items-center gap-4">
              {rightContent && <div>{rightContent}</div>}

              {/* 移动端菜单按钮 */}
              {menu && isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* 移动端菜单 */}
          {menu && isMobile && isMobileMenuOpen && (
            <div className="py-4 border-t border-border mt-3 animate-in slide-in-from-top duration-300">
              {menu}
            </div>
          )}
        </div>
      </header>
    );
  },
);

Header.displayName = 'Header';
