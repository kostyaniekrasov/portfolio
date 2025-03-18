'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  WorkSliderButtons,
} from '@/components';

import 'swiper/css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import Image from 'next/image';

const projects = [
  {
    category: 'Frontend with Google Firebase',
    title: 'ToonJoy',
    description:
      'A simple site with convenient functionality for viewing cartoons of various genres in Ukrainian dubbing. Cartoons are divided into several categories, namely cartoons, education, music, etc.',
    stack: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'Html 5' },
      { name: 'Material UI' },
      { name: 'TypeScript' },
      { name: 'Firebase' },
      { name: 'Framer Motion' },
      { name: 'Fuse' },
      { name: 'Nookies' },
      { name: 'Prettier' },
      { name: 'React Hook Form' },
      { name: 'React Perfect Scrollbar' },
      { name: 'React Player' },
      { name: 'React Fast Marquee' },
      { name: 'SCSS' },
      { name: 'Sharp' },
      { name: 'uuid' },
      { name: 'Zusntand' },
    ],
    image: {
      mobile: '/images/toonjoy-mob.png',
      desktop: '/images/toonjoy.png',
    },
    live: 'https://toonjoy-lilac.vercel.app/',
    github: 'https://github.com/kostyaniekrasov/next-cartoons',
  },
  {
    category: 'frontend',
    title: 'Apple Catalog',
    description: `It's a responsive product catalog app built with React. It allows users to view different models of phones, tablets, accessories, view detailed information, add products to favorites, cart and filter products according to various criteria. The project uses numerous modern technologies and web development packages.`,
    stack: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'Html 5' },
      { name: 'SCSS' },
      { name: 'i18next' },
      { name: 'react-router-dom' },
      { name: 'React Slick' },
      { name: 'CSS Skeletons' },
      { name: 'lodash.debounce' },
      { name: 'slick-carousel' },
      { name: 'react-transition-group' },
    ],
    image: {
      mobile: '/images/catalog-mob.png',
      desktop: '/images/catalog.png',
    },
    live: 'https://kostyaniekrasov.github.io/react_apple-catalog/',
    github: 'https://github.com/kostyaniekrasov/react_apple-catalog',
  },
  {
    category: 'frontend',
    title: 'Product list with svg animations',
    description: `This is a solution to the Product list with cart challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.`,
    stack: [
      { name: 'Html 5' },
      { name: 'Tailwind' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Vite' },
      { name: 'classnames' },
      { name: 'Framer Motion' },
      { name: 'Prettier' },
    ],
    image: {
      mobile: '/images/product-list-mob.png',
      desktop: '/images/product-list.png',
    },
    live: 'https://kostyaniekrasov.github.io/product-list-with-cart/',
    github: 'https://github.com/kostyaniekrasov/product-list-with-cart',
  },
  {
    category: 'frontend',
    title: '2048 game',
    description:
      'This project is a web-based version of the popular 2048 puzzle game. Players combine numbered tiles by sliding them across the grid to reach the 2048 tile. The game is built using HTML, CSS, and JavaScript, ensuring smooth animations and responsive design.',
    stack: [{ name: 'Html 5' }, { name: 'SCSS' }, { name: 'JavaScript' }],
    image: {
      mobile: '/images/2048-mob.png',
      desktop: '/images/2048.png',
    },
    live: 'https://kostyaniekrasov.github.io/2048-game/',
    github: 'https://github.com/kostyaniekrasov/2048-game',
  },
  {
    category: 'frontend',
    title: 'Dia landing',
    description: `This landing page is for "Air," a full-service creative agency that focuses on branding, communication, and strategic business growth. The site outlines their services, including brand development, content production, marketing strategy, and digital communications. It also features client testimonials and an overview of the agency's approach to combining deep analytics, strong strategy, and creative ideas.`,
    stack: [{ name: 'Html 5' }, { name: 'SCSS' }, { name: 'JavaScript' }],
    image: {
      mobile: '/images/air-mob.png',
      desktop: '/images/air.png',
    },
    live: 'https://kostyaniekrasov.github.io/dia-landing/',
    github: 'https://github.com/kostyaniekrasov/dia-landing',
  },
  {
    category: 'frontend',
    title: 'Todo app',
    description:
      'This project is a React-based Todo App that allows users to manage their tasks efficiently. Users can add, edit, and delete tasks, and the app uses animations for smooth transitions.',
    stack: [
      { name: 'Html 5' },
      { name: 'SCSS' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'REST API' },
    ],
    image: {
      mobile: '/images/todo-mob.png',
      desktop: '/images/todo.png',
    },
    live: 'https://kostyaniekrasov.github.io/react-todo-app/',
    github: 'https://github.com/kostyaniekrasov/react-todo-app',
  },
  {
    category: 'frontend',
    title: 'Eco cosmetics v2',
    description:
      'This landing page promotes "Witch of Mountain Winds," a brand of eco-cosmetics and handcrafted candles. The site highlights the use of natural ingredients, environmentally friendly packaging, and a commitment to sustainability. It features various products like shampoos, oils, and candles, with an emphasis on protecting nature and supporting wildlife conservation.',
    stack: [{ name: 'Html 5' }, { name: 'SCSS' }, { name: 'JavaScript' }],
    image: {
      mobile: '/images/ecov2-mob.png',
      desktop: '/images/ecov2.png',
    },
    live: 'https://github.com/kostyaniekrasov/eco_cosmetics-landing',
    github: 'https://github.com/kostyaniekrasov/eco_cosmetics-landing',
  },

  {
    category: 'frontend',
    title: 'Bike landing',
    description:
      'This landing page promotes "Bike," a company specializing in advanced city bicycles. It highlights the intuitive design, comparing different models, and showcases key features like auto-unlock, GPS tracking, integrated lights, and hydraulic disc brakes. The page is geared towards urban cyclists looking for high-performance, convenient, and stylish bikes.',
    stack: [{ name: 'Html 5' }, { name: 'SCSS' }, { name: 'JavaScript' }],
    image: {
      mobile: '/images/bike-mob.png',
      desktop: '/images/bike.png',
    },
    live: 'https://kostyaniekrasov.github.io/bike-landing/',
    github: 'https://github.com/kostyaniekrasov/bike-landing',
  },

  {
    category: 'frontend',
    title: 'Museum landing',
    description: `This landing page is for the National Art Museum of Ukraine (NAMU). It provides information about the museum's current exhibitions, events, and operational details. The page features various exhibitions, upcoming events, gallery images, and a subscription form to keep visitors updated on the latest news and events.`,
    stack: [{ name: 'Html 5' }, { name: 'SCSS' }, { name: 'JavaScript' }],
    image: {
      mobile: '/images/museum-mob.png',
      desktop: '/images/museum.png',
    },
    live: 'https://kostyaniekrasov.github.io/museum-landing/',
    github: 'https://github.com/kostyaniekrasov/museum-landing',
  },
  {
    category: 'frontend',
    title: 'Museum v2 landing',
    description: `This landing page for the National Art Museum of Ukraine (NAMU) informs visitors about current exhibitions, upcoming events, and provides online ticket purchasing options. It features museum operating hours, details about exhibitions, and news updates.`,
    stack: [{ name: 'Html 5' }, { name: 'SCSS' }, { name: 'JavaScript' }],
    image: {
      mobile: '/images/museumv2-mob.png',
      desktop: '/images/museumv2.png',
    },
    live: 'https://kostyaniekrasov.github.io/museum_v2-landing/',
    github: 'https://github.com/kostyaniekrasov/museum_v2-landing',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%]
              xl:justify-between"
          >
            <motion.div
              key={project.image.desktop}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.1,
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className="flex flex-col gap-[30px]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-outline text-7xl leading-none font-extrabold text-transparent">
                  {project.title}
                </div>
              </div>

              <h2
                className="group-hover:text-accent text-[42px] leading-none font-bold text-white capitalize
                  transition-all duration-500"
              >
                {project.category} project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={item.name}
                      className="text-accent text-xl"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="group-hover:text-accent text-3xl text-white" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="group-hover:text-accent text-3xl text-white" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 rounded-xl xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide
                    key={project.title}
                    className="w-full"
                  >
                    <div
                      className="group relative flex h-[460px] items-center justify-center rounded-xl
                        bg-pink-50/20"
                    >
                      <div className="absolute top-0 bottom-0 z-10 h-full w-full" />

                      <div className="relative h-full w-full">
                        <picture>
                          <source
                            srcSet={project.image.mobile}
                            media="(max-width: 600px)"
                          />
                          <Image
                            src={project.image.desktop}
                            fill
                            quality={100}
                            className="rounded-xl object-cover object-top"
                            alt={project.title}
                          />
                        </picture>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary  text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
