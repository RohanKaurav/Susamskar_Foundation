// HeroSection.jsx
import Peeple_Boy from '/images/peeple_boy1.png';

export default function HeroSection() {
  return (
    <div
      className="w-full h-screen bg-cover  bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Peeple_Boy})` }}
    >
       <div className="absolute inset-0 bg-black bg-opacity-10"></div>
  
        <div style={{ WebkitBorderBottomRightRadius: '40px' ,WebkitBorderBottomLeftRadius:'40px'}} className="relative z-10 px-20 py-4 flex  justify-between items-center text-black bg-white">
          <h1 className="text-xl font-bold tracking-widest">SUSAMSKAR FOUNDATION</h1>
          <div className="space-x-6 hidden md:flex ">
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">What We Do</a>
            <a href="#" className="hover:underline">Who we are</a>
            <a href="#" className="hover:underline">Support Us</a>
            <a href="#" className="hover:underline">Gallery</a>
          </div>
        </div>
      <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 md:px-20 text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl mt-16 z-12">
          Teaching <br />
          values <br />
          through <br />
         <div className='border-b-8 border-orange-400 z-0'>everyday life.</div>
         
        </h1>
        <div className="flex gap-6 mt-10 text-lg font-semibold tracking-wide ml-auto px-8">
          <span className="border-b-2 border-yellow-400">Living</span>
          <span className="border-b-2 border-yellow-400">Loving</span>
          <span className="border-b-2 border-yellow-400">Learning</span>
        </div>
      </div>
    </div>
  );
}
