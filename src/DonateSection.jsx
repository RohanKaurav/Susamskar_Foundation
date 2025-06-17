import Green from '../public/images/green.png'

export default function SupportSection() {
    return (
      <section
        className="w-full bg-cover bg-center bg-yellow-50 py-8 px-6 md:px-20"
        style={{
          backgroundImage: `url(${Green})`,
        }}
      >
        
  
        <div className="grid md:grid-cols-2 gap-10 mt-16 mb-16">
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="relative inline-block">
              <span className="relative z-10 border-b-4 border-orange-400">Support the Cause</span>
              <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-400 -z-10 rounded-sm"></span>
            </span>
          </h2>
            <p className="font-semibold">
              <span className="text-black">Donate Today</span> and be a reason for someone’s transformation.
            </p>
            <p className="mt-4 text-gray-600">
              Your contribution can help us reach more children, parents, and educators with meaningful, value-based programs that nurture emotional strength, self-awareness, and inner growth.
            </p>
  
            <div className="flex items-center border mt-6 rounded-md overflow-hidden">
              <div className="bg-yellow-400 px-4 py-3 font-bold text-xl">₹</div>
              <input
                type="number"
                defaultValue={500}
                className="flex-1 px-4 py-3 text-xl bg-white border-l"
              />
            </div>
  
           
            <div className="flex gap-3 mt-4">
              {["1000", "5000", "Custom"].map((amt) => (
                <button
                  key={amt}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded text-sm font-semibold"
                >
                  ₹ {amt}
                </button>
              ))}
            </div>
  
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-bold w-full py-3 rounded">
              DONATE NOW
            </button>
          </div>
  
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-center">
              <span className="relative inline-block">
                <span className="relative z-10 border-b-4 border-orange-400">Join us</span>
                <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-400 -z-10 rounded-sm"></span>
              </span>
            </h3>
            <form className="space-y-4">
              {["Full Name", "Email Address", "Contact Number"].map((field, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={field}
                  className="w-full border rounded px-4 py-2 bg-white"
                />
              ))}
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full border rounded px-4 py-2 bg-white"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 w-full py-3 rounded font-semibold">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </section>
    );
  }
  