'use client'; // 👈 ADD THIS AT THE TOP

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded hover:bg-blue-500 hover:text-white ${
      pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700'
    }`;

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
      <Link href="/"><h1 className="text-xl font-bold">SantimSite</h1></Link>
      <div className="space-x-4">
        <Link href="/" className={linkClass('/')}>Home</Link>
        <Link href="/about" className={linkClass('/about')}>About</Link>
        <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
