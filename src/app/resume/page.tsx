'use client';

import { IconBadge, IconCap } from '@/assets';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitSquare,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiRedux,
  SiI18Next,
  SiPrettier,
  SiReactquery,
  SiEslint,
  SiFirebase,
  SiCypress,
  SiJest,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';

const about = {
  title: 'About me',
  description: `I am a frontend developer with a passion for building modern, interactive, and user-friendly web applications. My journey into web development began with a strong foundation in software engineering, which later evolved into a deep interest in frontend technologies. 

  I have solid knowledge of React, Next.js, HTML5, CSS3 (Sass/SCSS), JavaScript, and TypeScript. I actively work with state management tools such as Redux, Zustand and React Query, and I use Tailwind CSS, Bootstrap, and Material UI to create responsive and visually appealing interfaces. 

  My workflow includes best practices like code linting with ESLint and Prettier, writing unit and e2e tests using Jest and Cypress, and optimizing performance for a seamless user experience. I also integrate REST APIs effectively and use Firebase for backend solutions. Additionally, I work with Framer Motion, SVG animations, and React Transition Group to create engaging UI interactions. 

  I thrive in fast-paced environments, always eager to learn new technologies and improve my skills. My goal is to build high-quality, efficient, and scalable applications that enhance user experience and solve real-world problems.`,
  info: [
    { fieldName: 'Name', fieldVaule: 'Kostiantyn Niekrasov' },
    { fieldName: 'Experience', fieldVaule: '1+ Years' },
    { fieldName: 'Phone', fieldVaule: '+380 98 345 78 18' },
    { fieldName: 'Email', fieldVaule: 'niekrasov.kostya@gmail.com' },
    { fieldName: 'Languages', fieldVaule: 'English(B1), Ukraine(Native)' },
  ],
};

const experience = {
  icon: <IconBadge />,
  title: 'My experience',
  description:
    'From designing visuals to developing interactive web applications, my journey combines creativity, problem-solving, and technical expertise.',

  items: [
    {
      company: 'Self Employed',
      position: 'Frontend Developer',
      duration: '2024 - Present',
    },
    {
      company: 'Oschadbank',
      position: 'Technical support',
      duration: '2023 - 2024',
    },
    {
      company: 'Self Employed',
      position: 'Graphic Designer',
      duration: '2021 - 2022',
    },
  ],
};

const education = {
  icon: <IconCap />,
  title: 'My education',
  description:
    'A strong foundation in software engineering combined with specialized training in frontend development.',

  items: [
    {
      institution: 'Mate Academy',
      degree: 'Frontend course',
      duration: '2024 - 2025',
    },
    {
      institution: 'State University of Infrastructure and Technologies',
      degree: 'Bachelor’s in Software Engineering',
      duration: '2018 - 2022',
    },
  ],
};

const skills = {
  title: 'My skills',
  description:
    'A set of technologies and tools I use to create modern, high-performance web applications.',
  skillList: [
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <FaGitSquare />,
      name: 'Git',
    },
    {
      icon: <FaBootstrap />,
      name: 'Bootstrap',
    },
    {
      icon: <SiRedux />,
      name: 'Redux',
    },
    {
      icon: <SiI18Next />,
      name: 'iI18Next',
    },
    {
      icon: <SiPrettier />,
      name: 'Prettier',
    },
    {
      icon: <SiReactquery />,
      name: 'React query',
    },
    {
      icon: <SiEslint />,
      name: 'Eslint',
    },
    {
      icon: <SiFirebase />,
      name: 'Firebase',
    },
    {
      icon: <SiCypress />,
      name: 'Cypress',
    },
    {
      icon: <SiJest />,
      name: 'Jest',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind.css',
    },
  ],
};

import { motion } from 'framer-motion';
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
  ScrollArea,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="mb-5 flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="max-xl: flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="experience"
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.1, duration: 0.3, ease: 'easeInOut' },
                }}
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>

                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0"></p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                      {experience.items.map((item) => {
                        return (
                          <li
                            key={item.position}
                            className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl
                              bg-[#232329] px-10 py-6 lg:items-start"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="bg-accent h-[6px] w-[6px] flex-shrink-0 rounded-full"></span>
                              <p className="flex-1 text-balance text-white/60">
                                {item.company}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent
              value="education"
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.1, duration: 0.3, ease: 'easeInOut' },
                }}
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[480px]">
                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                      {education.items.map((item) => {
                        return (
                          <li
                            key={item.degree}
                            className="flex h-[220px] flex-col items-center justify-center gap-1 rounded-xl
                              bg-[#232329] px-10 py-6 lg:items-start"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="bg-accent block h-[6px] w-[6px] rounded-full"></span>
                              <p className="flex-1 text-balance text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent
              value="skills"
              className="h-full w-full"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.1, duration: 0.3, ease: 'easeInOut' },
                }}
              >
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-xl: max-w-[600px] text-white/60 xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[520px]">
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                      {skills.skillList.map((skill) => {
                        return (
                          <li key={skill.name}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                                  <div className="group-hover:text-accent text-6xl transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>

                                <TooltipContent>
                                  <p className="capitalize"> {skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.1, duration: 0.3, ease: 'easeInOut' },
                }}
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {about.description}
                  </p>

                  <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-x-2 gap-y-6 xl:mx-0 xl:grid-cols-2">
                    {about.info.map((item) => {
                      return (
                        <li
                          key={item.fieldName}
                          className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap xl:justify-start"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldVaule}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
