import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cozyLogo from '/public/assets/svgs/cozy_logo.svg';

export default function Navbar() {
  const navLinks = [
    { text: 'Get cozy', page: 'about' },
    { text: 'What we do', page: 'services' },
    { text: 'Our Work', page: 'about' },
    { text: 'The blog', page: 'blog' },
    { text: 'Say hi', page: 'contact' },
  ];
  return (
    <header className='bg-navbar_bg pl-10 pr-6 font-Fraunces72ptsupersoft'>
      <div className='py-5 flex justify-between items-center'>
        <Link href='/'>
          <Image src={cozyLogo} className='w-[100px]' alt='cozy logo' />
        </Link>
        <nav className='flex text-2xl font-semibold text-soft_white gap-8 px-4'>
          {navLinks.map((link, index) => (
            <Link href={`/${link.page}`} key={index}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
