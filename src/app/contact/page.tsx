'use client'; 
import dynamic from 'next/dynamic';
import LazyLoad from '@/components/LazyLoad';

const ContactContent = dynamic(() => import('./ContactContent'));

export default function ContactPage() {
  return (
    <LazyLoad>
      <ContactContent />
    </LazyLoad>
  );
}