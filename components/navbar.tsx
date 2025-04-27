"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from 'next/image';
import logo from '@/public/logo.png';

// Define the sections for easier management
const sections = [
  { id: "hero", label: "Home", href: "#" },
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

  // Handle scroll effect for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id === "hero" ? "hero" : section.id),
      }))

      // Find the section that is currently in view
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

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="Ankit Services Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-colors",
                isScrolled
                  ? "bg-yellow-500 text-black hover:bg-yellow-600"
                  : "bg-yellow-500 text-black hover:bg-yellow-600",
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call Now</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("md:hidden p-2 rounded-md", isScrolled ? "text-black" : "text-white")}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden transition-transform duration-300 transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
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
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Call Now</span>
          </Link>
        </div>
      </div>
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
        isScrolled ? "text-gray-800" : "text-white",
        isActive && (isScrolled ? "text-yellow-600" : "text-yellow-400"),
      )}
    >
      {label}
      {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 rounded-full"></span>}
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
      className={cn(
        "text-white text-2xl font-medium transition-colors",
        isActive ? "text-yellow-500" : "hover:text-yellow-500",
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}
