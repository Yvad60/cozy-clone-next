import Image from 'next/image';
import heroImage from '/public/assets/images/hero.webp';

export default function Hero() {
  return (
    <section className='bg-hero_bg overflow-hidden'>
      <div className='max-w-[1400px] mx-auto relative'>
        <div className='flex py-20'>
          <div className='max-w-675p flex flex-col gap-[50px] flex-shrink-0'>
            <h1 className='text-90p leading-[99px] font-black bg-noise bg-clip-text py-[10px] text-transparent bg-dark_khaki font-Fraunces144ptsupersoft mix-blend-exclusion'>
              Your design team for the cost of a salary.
            </h1>
            <p className='text-[40px] font-semibold text-transparent bg-noise bg-light_gray bg-clip-text leading-[52px] mix-blend-exclusion'>
              Full-service design support that growing B2B and non-profit
              organizations need. Are you strained because you should have a
              design team but you don&apos;t?
            </p>
            <div>
              <button className='py-[30px] px-10 bg-[#b55730] text-soft_white rounded-[10px] font-Geomanist text-xl font-bold text-center tracking-[2px] bg-noise'>
                SEE HOW WE WORK & WHAT WE CAN DO
              </button>
            </div>
          </div>
          <div className='w-[846px] absolute right-0 -mr-[220px] mt-[100px]'>
            <Image src={heroImage} alt='' className='w-full' />
          </div>
        </div>
      </div>
    </section>
  );
}
