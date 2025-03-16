import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeCustomizer } from '../theme-customizer';
import { ThemeProvider, lightTheme } from '../theme-provider';

// Mock the useTheme hook
jest.mock('../theme-provider', () => {
  const originalModule = jest.requireActual('../theme-provider');

  return {
    ...originalModule,
    useTheme: () => ({
      theme: originalModule.lightTheme,
      setTheme: jest.fn(),
      resetTheme: jest.fn(),
      isDarkMode: false,
      toggleDarkMode: jest.fn(),
    }),
  };
});

describe('ThemeCustomizer', () => {
  const renderWithThemeProvider = (ui: React.ReactNode) => {
    return render(
      <ThemeProvider defaultThemeColors={lightTheme} defaultDarkMode={false}>
        {ui}
      </ThemeProvider>,
    );
  };

  it('renders correctly with default props', () => {
    renderWithThemeProvider(<ThemeCustomizer />);

    // Check if the component renders with title
    expect(screen.getByText('Theme Customizer')).toBeInTheDocument();

    // Check if theme mode buttons are rendered
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();

    // Check if action buttons are rendered
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Apply Theme')).toBeInTheDocument();
  });

  it('renders in compact mode when compact prop is true', () => {
    renderWithThemeProvider(<ThemeCustomizer compact={true} />);

    // In compact mode, the content should be hidden initially
    expect(screen.queryByText('Primary Colors')).not.toBeInTheDocument();

    // Toggle button should be visible
    const toggleButton = screen.getByLabelText('Expand');
    expect(toggleButton).toBeInTheDocument();

    // Click toggle button to expand
    fireEvent.click(toggleButton);

    // Now content should be visible
    expect(screen.getByText('Primary Colors')).toBeInTheDocument();
  });

  it('toggles between expanded and collapsed states', () => {
    renderWithThemeProvider(<ThemeCustomizer />);

    // Initially expanded
    expect(screen.getByText('Primary Colors')).toBeInTheDocument();

    // Click toggle button to collapse
    const toggleButton = screen.getByLabelText('Collapse');
    fireEvent.click(toggleButton);

    // Now content should be hidden
    expect(screen.queryByText('Primary Colors')).not.toBeInTheDocument();

    // Click toggle button again to expand
    const expandButton = screen.getByLabelText('Expand');
    fireEvent.click(expandButton);

    // Content should be visible again
    expect(screen.getByText('Primary Colors')).toBeInTheDocument();
  });

  it('has border radius section', () => {
    renderWithThemeProvider(<ThemeCustomizer />);

    // Check if border radius section is rendered
    expect(
      screen.getByText('Border Radius', { selector: 'h4' }),
    ).toBeInTheDocument();
  });
});
