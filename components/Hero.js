import Image from 'next/image'
import Link from 'next/link'
const  Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
    <div className="w-60 mx-auto">
      <Image src={'/home_cinema.svg'} width={200} height={200} layout="responsive"/>
    </div>
    <h1 className='text-2xl text-gray-700 uppercase font-bold'>Welcome to Fox-Movies</h1>
    <p className='text-gray-500'>Produce FILM feature, TELEVISION and GAME.</p>
    <Link href='/contectUs'>
    <button className='bg-gray-700 cursor-pointer text-white py-3 px-6 mt-4 rounded text-sm'>
      CONTACT US
    </button>
    </Link>
  </div>
  );
};

export default Hero;



