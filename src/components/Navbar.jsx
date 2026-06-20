'use client'
import { useState } from "react";
import {Button } from "@heroui/react"
import { FaStethoscope } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems=[
    {name:'Home', path:'/'},
    {name: 'All Appointments', path:'/all-appointments'},
    {name:'Dashboard', path:'/dashboard'}
  ]

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-1">
            <FaStethoscope className="text-3xl font-bold text-blue-800" />
            <p className="text-2xl font-bold"><span className="text-red-600">A</span><span>LPH</span><span>A</span></p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
            {
                menuItems.map((menuItem,index)=><li key={index}><Link href={menuItem.path}>{menuItem.name}</Link></li>)
            }
        </ul>
        <div className="hidden items-center gap-4 md:flex">
              <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 rounded-none"><Link href='/login'>Login</Link></Button>
              <Button className="w-full rounded-none"><Link href='/signup'>Sign Up</Link></Button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
              {
                menuItems.map((menuItem,index)=><li key={index}><Link href={menuItem.path}>{menuItem.name}</Link></li>)
            }
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Button className="w-full rounded-none"><Link href='/login'>Login</Link></Button>
              <Button className="w-full rounded-none"><Link href='/signup'>Sign Up</Link></Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}