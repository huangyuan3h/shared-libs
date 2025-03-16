'use client';

import { Button } from '@shared-libs/ui';
import Link from 'next/link';
import { LocalThemeCustomizer } from '../components/local-theme-customizer';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Shared UI Components</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-6">
              This is a website showcasing our shared UI component library. You
              can view and interact with all available components here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/components" passHref>
                <Button>View Components</Button>
              </Link>
              <a
                href="https://github.com/your-org/shared-libs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">GitHub Repository</Button>
              </a>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Theme Customization</h2>
            <LocalThemeCustomizer />
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <div className="bg-muted p-4 rounded-md mb-6">
            <pre className="text-sm overflow-x-auto">
              <code>npm install @shared-libs/ui</code>
            </pre>
          </div>
          <p className="mb-4">
            Import components from the library and use them in your React
            application:
          </p>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Button } from '@shared-libs/ui';\n\nfunction MyComponent() {\n  return <Button>Click Me</Button>;\n}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
