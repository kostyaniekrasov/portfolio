import Link from 'next/link';

const Custom404 = () => {
  return (
    <div
      className="absolute top-1/2 right-1/2 flex translate-x-1/2 -translate-y-1/2 flex-col
        items-center gap-4"
    >
      <h2
        className="group-hover:text-accent text-[42px] leading-none font-bold text-white capitalize
          transition-all duration-500"
      >
        Page not found
      </h2>

      <Link
        className="bg-accent text-primary hover:bg-accent-hover w-max rounded-3xl px-6 py-2
          font-semibold"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Custom404;
