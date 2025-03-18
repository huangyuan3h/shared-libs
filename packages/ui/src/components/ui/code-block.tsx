'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Button } from './button';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  language?: string;
}

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  (
    {
      className,
      children,
      showLineNumbers = false,
      showCopyButton = true,
      language = 'typescript',
      ...props
    },
    ref,
  ) => {
    const [isCopied, setIsCopied] = React.useState(false);
    const codeRef = React.useRef<HTMLPreElement>(null);

    const copyToClipboard = async () => {
      if (codeRef.current) {
        try {
          await navigator.clipboard.writeText(
            codeRef.current.textContent || '',
          );
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
    };

    return (
      <div className="relative group">
        {showCopyButton && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={copyToClipboard}
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
        <pre
          ref={ref}
          className={cn(
            'relative rounded-lg bg-muted p-4 overflow-x-auto',
            showLineNumbers && 'pl-12',
            className,
          )}
          {...props}
        >
          <code
            ref={codeRef}
            className={cn(
              'relative rounded bg-transparent text-sm',
              'font-mono',
              'text-foreground',
              'dark:text-foreground',
            )}
          >
            {children}
          </code>
        </pre>
      </div>
    );
  },
);

CodeBlock.displayName = 'CodeBlock';
