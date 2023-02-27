import Header from '../../componets/Header/Header';
import About from '../../componets/sections/About/About';
import Experience from '../../componets/sections/Experience/Experience';
import Hero from '../../componets/sections/Hero/Hero';
import useTheme from '../../hooks/theme.hook';

import { useTheme as useFlowTheme } from 'flowbite-react';

const Home = () => {
  const { theme } = useTheme();
  console.log(useFlowTheme().theme.timeline);

  return (
    <div className={`${theme ?? ''} font-mplus`}>
      <div className="min-h-screen h-full bg-nord-6 dark:bg-nord-0 text-nord-3 dark:text-nord-6">
        <Header />
        <main className="px-12 sm:px-24 md:px-32 lg:px-36 max-w-[1600px] mx-auto">
          <Hero />
          <section className="py-24 space-y-52">
            <About />
            <Experience />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
