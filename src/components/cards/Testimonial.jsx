import Image from 'next/image';

export default function Testimonial({
  position,
  heading,
  description,
  textAlign,
  clientName,
  proffession,
  imagePosition,
  imageSrc,
}) {
  let containerStyles = '';
  switch (position) {
    case 'topL':
      containerStyles =
        'bg-[#223240] w-full lg:w-[470px] rounded-tl-[80%] shadow-[#2D4850] rounded-tr-[80%] rounded-bl-[100%] mr-[15px]';
      break;
    case 'topR':
      containerStyles =
        'bg-[#2d4850] w-full lg:w-[370px] rounded-tl-[100%] shadow-[#2D4850] rounded-tr-[100%] rounded-br-[50%]';
      break;
    case 'bottomL':
      containerStyles =
        'bg-[#c47d57] w-full lg:w-[370px] rounded-tl-[100%] shadow-[#c47d57] rounded-bl-[60%] rounded-br-[60%] justify-self-end';
      break;
    case 'bottomR':
      containerStyles =
        'bg-dark_redish w-full lg:w-[470px] rounded-tr-[100%] shadow-[#c47d57] rounded-bl-[60%] rounded-br-[60%] justify-self-end';
      break;
  }
  return (
    <div
      className={`min-h-0 py-20 pr-10 shadow-2xl pl-[60px] bg-noise ${containerStyles}`}
    >
      <div className='flex flex-col'>
        <Image
          src={imageSrc}
          alt='client headshot'
          className={`w-20 border-2 border-white mix-blend-luminosity rounded-[32%] mb-6 ${
            imagePosition === 'center'
              ? 'self-center'
              : imagePosition === 'right'
              ? 'self-end'
              : 'self-start'
          }`}
        />
        <div
          className={`justify-self-end ${
            textAlign === 'right' && 'text-right'
          }`}
        >
          <h3 className='mt-6 mb-3 font-semibold text-[20px] text-dark_khaki'>
            {heading}
          </h3>
          <p className='text-lg mb-[15px] text-soft_white'>{description}</p>
          <div className='text-xs font-Geomanist text-soft_white'>
            <h4 className='font-bold uppercase tracking-[4px] mb-[5px] '>
              {clientName}
            </h4>
            <p
              className={`leading-4 whitespace-pre-line ${
                textAlign === 'right' && 'ml-[5px]'
              }`}
            >
              {proffession}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
