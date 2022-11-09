import Link from 'next/link';
import SectionMargin from '../wrappers/SectionMargin';

export default function Help() {
  return (
    <section className='bg-dark_redish'>
      <SectionMargin>
        <div className='py-14 lg:mr-[50px]'>
          <Link href='#'>
            <h2 className='mx-auto text-5xl font-black text-center text-white leading-[54px]'>
              🙋 How can we help?
            </h2>
          </Link>
        </div>
      </SectionMargin>
    </section>
  );
}
