import React from 'react';

interface StoryWrapperProps {
  children: React.ReactNode;
}

export function StoryWrapper({ children }: StoryWrapperProps) {
  return (
    <div className="p-4 bg-white dark:bg-gray-100 rounded-md shadow">
      {children}
    </div>
  );
}
