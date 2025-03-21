'use client';

import photo from '@/assets';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
          className="relative h-[298px] w-[298px] mix-blend-lighten xl:h-[498px] xl:w-[498px]"
        >
          <Image
            src={photo}
            alt="photo"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          viewBox="0 0 506 506"
          className="absolute inset-0 h-[298px] w-[298px] xl:h-[506px] xl:w-[506px]"
        >
          <motion.circle
            cx={253}
            cy={253}
            r={250}
            stroke={'var(--color-accent)'}
            strokeWidth={4}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
