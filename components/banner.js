import Image from 'next/image';

const Banner = () => {
  return (
    <header>
      <div>
        <Image src="/GloboLogo.png" width={1000} height={600} alt="logo" />
      </div>
      <div>Providing houses all over the world</div>
    </header>
  );
};

export default Banner;
