import React from 'react'
import { MapPin,Phone,Mail } from 'lucide-react';
import SocialIcons from './SocialIcons';
export default function Navbar() {
  return (
    <>
    <div className="navbar shadow-md px-4  bg-yellow-200 h-[4px] z-50 ">
      
      <div className="flex gap-2 text-sm flex-wrap">
      <div className="flex items-center gap-2 text-black">
      <Mail className="w-3 h-3 text-red-500" />
      <span  >susamskar@gmail.com</span>
      </div>

      <div className="flex items-center gap-2 text-black">
        <MapPin className="w-3 h-3  text-red-500" />
        <span>Salt Lake, Kolkata, India</span>
      </div>

      <div className="flex items-center gap-2 text-black">
        <Phone className="w-3 h-3  text-green-500" />
        <span>9038022870 || 8670913532</span>
      </div>
    </div>
      <div className="flex-end gap-2 ml-auto space-x-5 text-black">
        <a className="btn btn-ghost btn-sm gap-2 text-black">Donate Us</a>
        <a className="btn btn-ghost btn-sm">Join Us</a>
        <SocialIcons />
         </div>
         
    </div>

    </>
  )
}
