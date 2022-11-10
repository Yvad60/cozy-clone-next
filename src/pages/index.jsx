import Head from 'next/head';
import Footer from '../components/sections/Footer';
import Help from '../components/sections/Help';
import Hero from '../components/sections/Hero';
import Reachout from '../components/sections/Reachout';
import Testimonial from '../components/sections/Testimonial';
export default function Home() {
  return (
    <>
      <Head>
        <title>Cozy: Honest, real-world digital design & marketing</title>
        <meta
          name='description'
          content='We make design & digital marketing expertise accessible to careworn budgets, with a focus on efficiency, quality, and reliability. No bullshit. No epic quests for inspiration. Just pragmatic collaboration and results.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <Testimonial />
        <Reachout />
        <Help />
        <Footer />
      </main>
    </>
  );
}
