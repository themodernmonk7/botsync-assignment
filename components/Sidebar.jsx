"use client"
import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className="w-54 fixed top-0 left-0 z-40 h-screen border border-t-0 border-l-0 border-black/20 shadow-2xl hidden md:block">
      <div className="bg-[#00003EE8] py-4 text-white text-center font-extrabold text-sm flex items-center justify-center  space-x-5 ">
        <Image src={"./Icons/shield.svg"} width={24} height={24} alt="shield" />
        <p>Admin Portal</p>
      </div>
      <div className="capitalize pt-8">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={` flex justify-start space-x-3 ml-5 py-2 items-center ${
              pathname === link.url
                ? "text-[#1D77FF] border-r-2"
                : "text-[#808080]"
            }`}
          >
            <span>{link.icon}</span>
            <span>{link.title} </span>
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
