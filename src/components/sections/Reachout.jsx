import Image from 'next/image';
import SectionMargin from '../wrappers/SectionMargin';
import sanDiegoDesignersLogo from '/public/assets/svgs/sandiego_logo.svg';

export default function Reachout() {
  return (
    <section>
      <div className='relative bg-black'>
        <div className='absolute w-full h-full opacity-30'>
          <video
            className='object-cover w-full h-full'
            autoPlay
            muted
            loop
            src='/assets/videos/design.mp4'
          ></video>
        </div>
        <SectionMargin>
          <div className='relative flex flex-col items-center justify-center lg:flex-row gap-[6.25rem] py-[8.75rem] text-soft_white'>
            <Image
              src={sanDiegoDesignersLogo}
              alt='san diego logo image'
              className='w-[7.5rem]'
            />
            <div className='max-w-[45rem]'>
              <h3 className='text-5xl font-bold'>
                <span className='italic font-bold'>Psst…</span> <br /> are you a
                designer?
              </h3>
              <p className='mt-6 text-xl font-bold leading-8'>
                Consider joining our{' '}
                <span className='text-dark_pink'>
                  San Diego Design Designers{' '}
                </span>
                group. More than 700 people, we meet online via Slack and in
                person at social events around the city. It’s a great
                opportunity to share ideas, get inspired, find support, and
                celebrate great design.
              </p>
            </div>
          </div>
        </SectionMargin>
      </div>
    </section>
  );
}
