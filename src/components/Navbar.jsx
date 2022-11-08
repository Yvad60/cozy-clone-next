import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cozyLogo from '/public/assets/svgs/cozy_logo.svg';
import humbergerIcon from '/public/assets/svgs/icons/humberger.svg';

export default function Navbar() {
  const navLinks = [
    { text: 'Get cozy', page: 'about' },
    { text: 'What we do', page: 'services' },
    { text: 'Our Work', page: 'about' },
    { text: 'The blog', page: 'blog' },
    { text: 'Say hi', page: 'contact' },
  ];
  return (
    <header className='pl-10 pr-6 bg-navbar_bg font-Fraunces72ptsupersoft'>
      <div className='flex items-center justify-center py-5 gap-14 lg:justify-between'>
        <Link href='/'>
          <Image src={cozyLogo} className='w-100p' alt='cozy logo' />
        </Link>
        <nav className='hidden gap-8 px-4 text-2xl font-semibold md:flex text-soft_white'>
          {navLinks.map((link, index) => (
            <Link href={`/${link.page}`} key={index}>
              {link.text}
            </Link>
          ))}
        </nav>
        <nav className='block lg:hidden'>
          <Image
            className='w-10'
            src={humbergerIcon}
            alt='humberger nav icon'
          />
        </nav>
      </div>
    </header>
  );
}
