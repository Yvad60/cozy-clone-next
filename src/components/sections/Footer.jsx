import Image from 'next/image';
import Link from 'next/link';
import socialIcons from '../../data/socialIcons';
import SectionMargin from '../wrappers/SectionMargin';
import bureauOfDigital from '/public/assets/images/bureau_of_digital_logo.webp';
import cluntchRatings from '/public/assets/images/clutch_ratings.webp';
import sanDiegoLogo from '/public/assets/images/san_diego_logo.webp';
import accredditedBusiness from '/public/assets/svgs/accreditted_business_logo.svg';
import cozyLogoDark from '/public/assets/svgs/cozy_logo_dark.svg';

export default function Footer() {
  const footerLinks = ['About', 'Services', 'Work', 'Blog', 'Contact'];
  return (
    <footer className='bg-[#e5dfd5]'>
      <SectionMargin>
        <div className='pt-12 pb-7 text-[13px]'>
          <div className='flex items-center justify-between px-16 pb-6'>
            <div className='flex items-center gap-14'>
              <Image src={cozyLogoDark} alt='dark logo' className='w-[73px]' />
              <nav className='flex gap-8'>
                {footerLinks.map((link, index) => (
                  <Link
                    className='text-[13px] text-dark_redish'
                    key={index}
                    href={link.toLowerCase()}
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>
            <div className='flex gap-10'>
              <div>
                <Image
                  src={sanDiegoLogo}
                  alt='san diego logo'
                  className='inline-block w-5'
                />
                <Link className='ml-4 text-dark_pink' href='#'>
                  San Diego Digital Designers
                </Link>
              </div>
              <div className='flex gap-2'>
                {socialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center py-1 rounded-sm px-[6px] ${icon.backgroundClass}`}
                  >
                    <Image
                      alt={`icon ${index + 1}`}
                      src={icon.iconImage}
                      className='block w-3'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between py-6 mt-10 border-t px-14 border-dark_redish'>
            <div className='flex items-center gap-10 py-2'>
              <Image
                src={accredditedBusiness}
                alt='accreddited Business logo'
                className='w-[140px]'
              />
              <Image
                src={bureauOfDigital}
                alt='bureau of digital logo'
                className='w-[140px]'
              />
              <Image
                src={cluntchRatings}
                alt='clutch ratings'
                className='block rounded-tr-[30px] rounded-bl-[30px] w-[210px] h-[50px]'
              />
            </div>
            <div className='flex text-xs gap-14'>
              <p>Made with 💖 in beautiful, sunny San Diego. ©2021</p>
              <nav className='space-x-5 text-dark_redish'>
                <Link href='#'>Privacy</Link>
                <Link href='#'>Photo credit</Link>
              </nav>
            </div>
          </div>
        </div>
      </SectionMargin>
    </footer>
  );
}
