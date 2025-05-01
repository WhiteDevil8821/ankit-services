"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import logo from '@/public/logo.png'

const sections = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "why-choose-us", label: "Why Us", href: "#why-choose-us" },
  { id: "booking", label: "Book Now", href: "#booking" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "contact", label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements.reduce((acc, section) => {
        if (!section.element) return acc
        const rect = section.element.getBoundingClientRect()
        const isInView = rect.top <= 150 && rect.bottom >= 150
        if (isInView) return section.id
        return acc
      }, "hero")

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-yellow-50 py-4"
      )}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Ankit Services Homepage">
            <Image
              src={logo}
              alt="Ankit Services Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="font-bold text-lg uppercase tracking-wide text-gray-800 font-sans">
              Ankit Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation">
            {sections.map((section) => (
              <NavLink
                key={section.id}
                href={section.href}
                label={section.label}
                isScrolled={isScrolled}
                isActive={activeSection === section.id}
              />
            ))}

            {/* Call Button */}
            <Link
              href="tel:+919308776501"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500 text-black hover:bg-yellow-600 transition-colors"
              title="Call Now"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call Now</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-black"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-yellow-50 z-40 md:hidden flex flex-col items-center justify-center space-y-8 p-4 transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-black"
            aria-label="Close mobile menu"
          >
            <X className="h-8 w-8" />
          </button>

          {sections.map((section) => (
            <MobileNavLink
              key={section.id}
              href={section.href}
              label={section.label}
              onClick={handleLinkClick}
              isActive={activeSection === section.id}
            />
          ))}

          {/* Call Button */}
          <Link
            href="tel:+919308776501"
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition-colors"
            onClick={handleLinkClick}
            title="Call Now"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Call Now</span>
          </Link>
        </div>
      )}
    </header>
  )
}

// Desktop Navigation Link
function NavLink({
  href,
  label,
  isScrolled,
  isActive,
}: {
  href: string
  label: string
  isScrolled: boolean
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "font-medium transition-colors relative",
        isScrolled ? "text-gray-800" : "text-gray-800",
        isActive && "text-yellow-600"
      )}
      title={`Go to ${label} section`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 rounded-full"></span>
      )}
    </Link>
  )
}

// Mobile Navigation Link
function MobileNavLink({
  href,
  label,
  onClick,
  isActive,
}: {
  href: string
  label: string
  onClick: () => void
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-black text-2xl font-medium transition-colors",
        isActive ? "text-yellow-600" : "hover:text-yellow-600"
      )}
      title={`Go to ${label} section`}
    >
      {label}
    </Link>
  )
}
