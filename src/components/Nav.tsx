'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'portfolio',
    path: '/portfolio',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.name}
            className={`${link.path === pathname && 'text-accent border-accent border-b-2'}
            hover:text-accent font-medium capitalize transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
