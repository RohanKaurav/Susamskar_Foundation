export default function TeamSection(){
    return(
        <div>
        <h1 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10  border-b-8 border-orange-400">Meet The Team</span>
            <span className="absolute left-0 bottom-1 h-2 w-full bg-orange-400 -z-10 rounded-sm"></span>
        </h1>
        <p className="text-sm text-gray-600 mb-10">| Organisational members</p>

 
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {[
      {
        name: 'Dr. Nijwm Wari',
        title: 'Professor, IIT Bhubaneswar',
        subtitle: 'B.Tech, M.Tech, and Ph.D from IIT Kharagpur',
        image: '/images/NitaiRam_pr.jpeg',
      },
      {
        name: 'Supriya Hazra',
        title: 'Ex-PR and Marketing Officer',
        subtitle: 'Warner Bros. Inc.',
        image: '/images/supriya_mataji.jpeg',
      },
      {
        name: 'Niladri Hazra',
        title: 'Ex–Director',
        subtitle: 'Geological Survey of India',
        image: '/images/nilanchal_pr.jpeg',
      },
      {
        name: 'Pawan Thakur',
        title: 'Physics Lecturer',
        subtitle: 'SVN Public School, Nahan',
        image: '/images/pawan_pr.jpeg',
      },
      {
        name: 'Jayati Goswami',
        title: 'Head Mistress',
        subtitle: 'Lakshmipat Singhania Academy, Kolkata',
        image: '/images/jayati_mataji.jpeg',
      },
    ].map((member, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col items-center p-4"
      >
        <img src={member.image} className="rounded-t-2xl w-full h-48 object-cover" />
        <div className="mt-4">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-gray-700">{member.title}</p>
          <p className="text-xs text-gray-600">{member.subtitle}</p>
        </div>
      </div>
    ))}
  </div>
  </div>

    )
}