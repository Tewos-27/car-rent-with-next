'use client'; 
import dynamic from 'next/dynamic';
import LazyLoad from '@/components/LazyLoad';

const AboutContent = dynamic(() => import('./AboutContent'));

export default function AboutPage() {
  return (
    <LazyLoad>
      <AboutContent />
    </LazyLoad>
  );
}