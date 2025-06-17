const missionData = [
    {
      title: "Youth Empowerment Program (YEP)",
      image: "../images/kids_smil.jpg",
    },
    {
      title: "Wealthy Hearts",
      image: "../images/wealth.jpeg",
    },
    {
      title: "Weaving Values Through Teaching",
      subtitle: "(Teachers’ Seminars)",
      image: "/images/teaching.jpeg",
    },
    {
      title: "Rekindling Hearts",
      subtitle: "(School-Based Value Education)",
      image: "/images/rekindling.jpg",
    },
    {
      title: "Positive Parenting Workshops",
      image: "/images/parenting.jpg",
    },
    {
      title: "Inner Voice",
      subtitle: "(Counseling Support)",
      image: "/images/counseling.jpeg",
    },
  ];
  
  export default function Mission() {
    return (
      < div className="bg-[#FFFDD0] py-6 px-4 text-center">
       
       <h1 className="text-3xl font-bold text-center relative">
        <span className="relative inline-block text-black border-b-8 border-orange-400 ">
          <span className="absolute inset-x-0 bottom-1 h-3 bg-orange-400 rounded-md -z-10"></span>
          Our Mission in Action
        </span>
      </h1>

  
        
        <p className="max-w-4xl mx-auto text-gray-700 text-lg mb-12 mt-2">
          Rooted in the values of self-awareness, discipline, emotional intelligence, and social responsibility, our initiatives integrate the wisdom of ancient Indian traditions with contemporary pedagogical approaches.
        </p>
  
       
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {missionData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                )}
                <button className="mt-4 bg-yellow-400 text-black font-medium py-1 px-4 rounded-full hover:bg-yellow-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  