import TeamSection from "./TeamSection"
export default function AboutUs(){
    return(
        <>
       <section className="py-10 px-6 md:px-20 bg-white ">
  <  div className="flex flex-col md:flex-row items-start gap-10 mb-8">
    <div className="flex-1">
      <h1 className="text-4xl font-bold mb-4 relative inline-block">
        <span className="relative z-10 border-b-8 border-orange-400">About Us !</span>
        <span className="absolute left-0 bottom-1 h-2 w-full bg-orange-400 -z-10 rounded-sm"></span>
      </h1>

      <p className="mt-6 text-gray-800 leading-relaxed">
        Founded in 2013, Susamskar Foundation is a registered non-profit social initiative aims from the vision of a large section of dedicated teachers and professionals from Dhrangadhra, united by a shared commitment to shaping positive futures through value-based education and community development.
      </p>
      <p className="mt-4 text-gray-800 leading-relaxed">
        What began as a focused initiative slowly matured with like-minded educators, volunteers, and thought leaders across cities, towns, villages, traditions, and communities focusing together. We approached a diverse range of populations, from rural communities to urban centers, ensuring that our programs reach those who need them most.
      </p>
     
    </div>

    <div className="flex gap-4 mt-20">
      <img src="../public/images/about1.jpg" className="rounded-xl w-28 h-28 object-cover" />
      <img src="../public/images/about2.jpg" className="rounded-xl w-28 h-28 object-cover" />
      <button className="mt-6 text-sm font-semibold text-black flex items-center gap-1">
        Know Us Better <span className="text-xs">▶</span>
      </button>
    </div>
    
  </div>

  <TeamSection />
  </section>

       
        </>
    )
   

}