import Image from 'next/image';
import TestimonialCard from '../cards/Testimonial';
import SectionMargin from '../wrappers/SectionMargin';
import ericImage from '/public/assets/images/eric.webp';
import martinImage from '/public/assets/images/martin.webp';
import michaelImage from '/public/assets/images/michael.webp';
import sussieImage from '/public/assets/images/sussie.webp';
import chatIcon from '/public/assets/svgs/icons/chat.svg';

export default function Testimonial() {
  return (
    <section className='bg-[#e5dfd5] py-36'>
      <SectionMargin>
        <div className='relative grid justify-center gap-[30px] items-end grid-cols-1 lg:grid-cols-[repeat(2,470px)]'>
          <div className='mr-[15px]'>
            <TestimonialCard
              imageSrc={sussieImage}
              position='topL'
              heading='“One of the top design professionals…”'
              description="I connect with hundreds of talented folks on a regular basis, and I
            can say with complete confidence that Lee is one of the best UX
            designers in Aquent/Vitamin T's global network."
              textAlign='right'
              clientName='SUSIE POLLASKY'
              proffession={
                'Now: Leadership Recruiting @ Product Design \n at Facebook'
              }
              imagePosition='center'
            />
          </div>
          <div>
            <TestimonialCard
              imageSrc={martinImage}
              position='topR'
              heading="“They're a very well-rounded organization…”"
              description='Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased.'
              clientName='MARTIN SPRITZER'
              proffession='General Manager @ iQuoteXpress'
              imagePosition='center'
            />
          </div>
          <div className='self-start justify-self-end'>
            <TestimonialCard
              position='bottomL'
              heading="“They're just good people.”"
              description="They were a pleasure to work with and I'm really happy with the results. They pretty much nailed it."
              clientName='ERIC WEISS'
              proffession='Founder @ Full Cycle Product Development'
              textAlign='right'
              imagePosition='right'
              imageSrc={ericImage}
            />
          </div>
          <div>
            <TestimonialCard
              position='bottomR'
              heading='“The project was successful”'
              description='They strive to come up with good design, and they focus on all the right things. The quality of their work is high, and all the deliverables are very well-organized and professional.'
              clientName='MICHAEL WEISFELD'
              proffession='Director of Digital Marketing @ National Funding'
              imagePosition='left'
              imageSrc={michaelImage}
            />
          </div>
          <div className='absolute inset-0 hidden mx-auto my-auto lg:block h-fit w-fit translate-y-[110px] '>
            <div className='border border-[#e5dfd5] rounded-full p-[6px]'>
              <div className='border border-[#e5dfd5] rounded-full p-[6px]'>
                <div className='bg-[#e5dfd5] rounded-full p-7 shadow-md'>
                  <Image alt='chat icon' src={chatIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionMargin>
    </section>
  );
}
