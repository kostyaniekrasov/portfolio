import { Button, Photo, Socials, Stats } from '@/components';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Frontend Developer</span>

            <h1 className="h1 mb-6">
              Hello i'm <br />{' '}
              <span className="text-accent">Niekrasov Kostiantyn</span>
            </h1>

            <p className="mb-9 max-w-[500px] text-white/80">
              I am a Front-End developer with experience in creating both
              client-side and full-fledged web projects using Backend on Google
              Firebase.
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant={'outline'}
                size={'lg'}
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
