const events = [
    {
      title: "Awakening Values",
      description:
        "A Special Class for KV Students. Instilling essential life skills through storytelling, reflection, and fun activities.",
      location: "Kendriya Vidyalaya, Salt Lake, Kolkata, India",
      date: "12",
      month: "JUNE",
      badgeColor: "bg-yellow-400",
      image: "/images/event1.jpeg",
    },
    {
      title: "Rekindling Hearts",
      description:
        "A value-based experiential session to help students connect with themselves and grow with resilience, empathy, and clarity.",
      location: "Kendriya Vidyalaya, Kharagpur, India",
      date: "20",
      month: "JUNE",
      badgeColor: "bg-cyan-400",
      image: "/images/event2.jpeg",
    },
    {
      title: "Inner Voice",
      description:
        "A personalized counselling session for students and parents to address emotional challenges and build mental resilience.",
      location: "DAV Model School, Medinipur, India",
      date: "06",
      month: "JULY",
      badgeColor: "bg-green-500",
      image: "/images/event3.jpeg",
    },
  ];
  
  export default function CalendarSection() {
    return (
      <section className="bg-[#f4f4f2] py-16 px-4 text-center">
       
        <h2 className="text-4xl font-bold mb-2 relative inline-block">
          <span className="relative z-10 text-black border-b-8 border-orange-400">Mark Your Calendar 📅</span>
          <span className="absolute left-0 bottom-1 w-[180px] h-2 bg-orange-400 -z-10 rounded-md"></span>
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mt-2 mb-12">
          Explore what’s ahead as we bring value education and inner development to new communities and classrooms.
        </p>
  
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg text-left">
              <div className="relative">
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
                <div
                  className={`absolute bottom-3 right-3 text-sm text-black font-bold px-3 py-2 rounded-md ${event.badgeColor}`}
                >
                  <div className="text-center leading-tight">
                    <div className="text-xl">{event.date}</div>
                    <div className="text-[10px] tracking-widest">{event.month}</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-2xl">|</span> {event.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                <p className="text-sm text-gray-700 mt-2 font-medium">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  