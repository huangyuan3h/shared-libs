import { useEffect, useState } from 'react';

/**
 * Hook to check if component is mounted
 * Useful for avoiding hydration issues
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted;
}
