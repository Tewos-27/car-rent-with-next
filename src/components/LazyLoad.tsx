// components/LazyLoad.tsx
'use client'; 
import { Suspense } from 'react';
import SuspenseFallback from './SuspenseFallback';

export default function LazyLoad({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>;
}