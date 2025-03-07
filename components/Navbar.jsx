"use client"
import Image from "next/image"
import { useState } from "react"

const Navbar = () => {
  return (
    <nav className="bg-[#00003EE8] sticky top-0 z-30 text-white h-[61px] w-full flex justify-between items-center ">
      <button className="pl-5 cursor-pointer">
        <Image
          src={"/Icons/menu-icon.svg"}
          width={24}
          height={24}
          alt="menu icon"
        />
      </button>
      <div className="pr-8 flex justify-center items-center">
        <button className="px-5 cursor-pointer">
          <Image
            src={"/Icons/bell-icon.svg"}
            width={35}
            height={35}
            alt="bell icon"
          />{" "}
        </button>
        <button className="cursor-pointer">
          <Image
            src={"/Icons/profile-icon.svg"}
            width={28}
            height={28}
            alt="profile icon"
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
