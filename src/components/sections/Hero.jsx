import Image from 'next/image';
import Button from '../Button';
import SectionMargin from '../wrappers/SectionMargin';
import heroImage from '/public/assets/images/hero.webp';

export default function Hero() {
  return (
    <section className='overflow-hidden bg-hero_bg'>
      <SectionMargin>
        <div className='relative'>
          <div className='flex flex-col lg:py-16 lg:flex-row'>
            <div className='flex flex-col flex-shrink-0 max-w-675p gap-50p'>
              <h1 className='font-black text-transparent py-10p text-[3.75rem] lg:text-90p leading-[1.1em] lg:leading-99p bg-clip-text bg-dark_khaki bg-noise font-Fraunces144ptsupersoft '>
                Your design team for the cost of a salary.
              </h1>
              <p className='font-semibold text-transparent leading-[1.3em] text-[1.875rem] lg:text-40p bg-noise bg-light_gray bg-clip-text lg:leading-52p mix-blend-exclusion'>
                Full-service design support that growing B2B and non-profit
                organizations need. Are you strained because you should have a
                design team but you don&apos;t?
              </p>
              <div>
                <Button>SEE HOW WE WORK & WHAT WE CAN DO</Button>
              </div>
            </div>
            <div className='right-0 w-full pb-8 -mb-[3.125rem] mt-14 lg:absolute lg:w-846p lg:-mr-220p'>
              <Image src={heroImage} alt='' className='w-full' />
            </div>
          </div>
        </div>
      </SectionMargin>
    </section>
  );
}
