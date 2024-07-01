'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button onClick={() => setTheme('light')}>Light</Button>
      <Button variant="outline" onClick={() => setTheme('dark')}>
        Dark
      </Button>
      <Button onClick={() => setTheme('system')}>System</Button>
    </>
  );
}
