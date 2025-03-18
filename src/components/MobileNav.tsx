'use client';

import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';

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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-accent text-[32px]" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col"
      >
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={'/'}>
            <h1 className="text-4xl font-semibold">
              Niekrasov <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.name}
                className={`hover:text-accent text-xl capitalize transition-all ${ link.path === pathname &&
                'text-accent border-accent border-b-2' }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
