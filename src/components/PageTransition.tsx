'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface Props {
  children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
          className="bg-primary pointer-events-none fixed top-0 h-screen w-screen"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
