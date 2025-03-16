import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProviderWrapper from '../components/theme-provider-wrapper';
import { Header } from '../components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shared UI Components',
  description: 'A showcase of our shared UI components library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper defaultDarkMode={false}>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
