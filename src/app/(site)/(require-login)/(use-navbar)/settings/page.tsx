"use client"
import Button from './comp/button';
import { FaArrowRight } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaLock, FaBell, FaArrowUp, FaSignOutAlt } from 'react-icons/fa';
import { SlArrowRight, SlKey, SlUser, SlBell, SlArrowUpCircle   } from "react-icons/sl";
import Button2 from './comp/button2';
import { signOut, useSession } from "next-auth/react"


export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      {/* <h1 className="text-4xl font-bold text-center mt-4">Settings</h1> */}
      <div
        className={`text-[24px] font-rubik font-medium w-full py-2 text-center shadow-sm sticky`}
      >
        Settings
      </div>

      <div className="p-2 border border-gray-300 rounded-2xl shadow-md mx-5 my-5">
        <Button 
          icon1={<SlUser className="text-white "/>} 
          title="Profile" 
          subtitle="Manage your personal information" 
          href="/profile" 
          icon2={<SlArrowRight />} 
        />
        <hr className="mt-2 border-t border-gray-300 mx-3" />

        <Button 
          icon1={<SlBell className="text-white"/>} 
          title="Notification" 
          subtitle="Customize your notification preferences" 
          href="/profile" 
          icon2={<SlArrowRight />} 
        />
        <hr className="mt-2 border-t border-gray-300 mx-3" />

        <Button 
          icon1={<SlKey className="text-white"/>} 
          title="Change Password" 
          subtitle="Update your account password" 
          href="/profile" 
          icon2={<SlArrowRight />} 
        />
        <hr className="mt-2 border-t border-gray-300 mx-3" />

        <Button 
          icon1={<SlArrowUpCircle  className="text-white"/>} 
          title="Upgrade Profile" 
          subtitle="Change your obtained badges" 
          href="/profile" 
          icon2={<SlArrowRight />} 
        />


      </div>
        <div className="p-2 border border-gray-300 rounded-2xl shadow-md mx-5 my-5 bg-[#FAEFEF]">
          <Button2
              onClick={() => signOut()}
              icon1={<FaSignOutAlt className=""/>} 
              title="Logout" 
              subtitle="" 
              href="/profile" 
              icon2={<SlArrowRight />} 
            /> 
        </div>      
    </div>
  );
}
