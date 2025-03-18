import Link from 'next/link';
import Nav from './Nav';
import { Button, MobileNav } from '@/components';

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Niekrasov<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden items-center gap-8 xl:flex">
          <Nav />

          <Link href={'/contact'}>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
