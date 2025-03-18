'use client';
import CountUp from 'react-countup';

const stats = [
  {
    num: 1,
    text: 'Years of experience',
  },
  {
    num: 12,
    text: 'Projects completed',
  },
  {
    num: 10,
    text: 'Technologies mastered',
  },
  {
    num: 500,
    text: 'Code commits',
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vm] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item) => {
            return (
              <div
                key={item.text}
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              >
                <div>
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl font-extrabold xl:text-6xl"
                  />
                  <span className="text-4xl font-extrabold xl:text-6xl">+</span>
                </div>
                <p
                  className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug
                  text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
