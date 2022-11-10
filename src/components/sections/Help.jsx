import Link from 'next/link';
import SectionMargin from '../wrappers/SectionMargin';

export default function Help() {
  return (
    <section className='bg-dark_redish'>
      <SectionMargin>
        <div className='py-14 lg:mr-[3.125rem]'>
          <Link href='#'>
            <h2 className='mx-auto text-5xl font-black text-center text-[#d4ac8e] delay-200 ease-in hover:text-white leading-[3.375rem]'>
              🙋 How can we help?
            </h2>
          </Link>
        </div>
      </SectionMargin>
    </section>
  );
}
