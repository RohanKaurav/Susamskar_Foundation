export default function Blog(){
    return(
        <section className="bg-black text-white">
  <div className="grid md:grid-cols-2 w-full">
    <div className="w-full h-full">
      <img src='/images/thanky.jpg' alt="Thank You" className="w-full h-full object-cover" />
    </div>

 
    <div className="bg-white text-black p-10">
      <h2 className="text-4xl font-bold mb-2">
        <span className="relative z-10">Our Blogs</span>
        <span className="absolute left-0 bottom-1 h-2 w-28 bg-yellow-400 -z-10 rounded-sm"></span>
      </h2>
      <p className="text-gray-600 mb-6">
        Our blog shares real stories, insights, and reflections...
      </p>

     
      {[
        {
          title: "Teaching Values in a Fast–Moving World",
          subtitle: "Why It Still Matters",
          desc: "Why timeless values like empathy...",
          img: "/images/blog1.jpg",
        },
        {
          title: "What Children Really Learn from Us",
          subtitle: "More Than Just Academics",
          desc: "How kids absorb emotional intelligence...",
          img: "/images/blog2.jpg",
        },
        {
          title: "Small Moments, Big Lessons",
          subtitle: "Real Stories from Our Classrooms",
          desc: "Short, real-life moments from Susamskar sessions...",
          img: "/images/blog3.jpg",
        },
      ].map((blog, idx) => (
        <div key={idx} className="flex items-start mb-4 gap-4">
          <img src={blog.img} className="w-14 h-14 rounded-xl object-cover" />
          <div>
            <p className="font-semibold">{blog.title}</p>
            <p className="text-sm">{blog.desc}</p>
          </div>
        </div>
      ))}

      <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded mt-4">
        Read More
      </button>
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-4 py-10 px-6 bg-gray-800">
    <div>
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4732994690584!2d88.419585!3d22.593101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276415c1d915f%3A0x4773efb2108490a3!2sF-13%2F2%2C%20Karunamoyee%20Housing%20Estate%2C%20Sector%20II%2C%20Salt%20Lake%20City%2C%20Kolkata%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1718611620000!5m2!1sen!2sin"
      width="100%"
        height="200"
        className="rounded"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div >
     <h2 className="text-xl font-bold mb-4 text-center" >GET IN TOUCH</h2>
     <div className="mt-4 text-sm text-center">
        <p>Address: F - 13/2, Karunamoyee Housing Estate</p>
        <p>Sector II, Salt Lake, Kolakata - 700091</p>
        <p>Email: susamskar@gmail.com</p>
        <p>Phone: 9038022870, 8670913532, 9733425118</p>
      </div>
   </div>
   
    <div className="ml-auto">
      <h2 className="text-xl font-bold mb-4 text-center">GALLERY</h2>
      <div className="grid grid-cols-3 gap-2">
        {["/images/galary1.jpg", "/images/galary2.jpg", "/images/galary3.jpg", "/images/galary4.jpg", "/images/galary5.jpg", "/images/galary6.jpg"].map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i}`} className="w-full h-24 object-cover rounded" />
        ))}
      </div>
    </div>
  </div>
</section>
    )
}

