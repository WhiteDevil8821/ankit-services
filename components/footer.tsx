import Link from "next/link"
import { Instagram } from "lucide-react"
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" aria-labelledby="footer-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Image 
                src={logo} 
                alt="Ankit Services Logo - Trusted Taxi in Ranchi" 
                width={60} 
                height={60} 
                className="object-contain" 
              />
              <h3 className="text-2xl font-bold tracking-wide text-white" id="footer-heading">
                ANKIT SERVICES
              </h3>
            </div>

            <p className="text-gray-400 mb-4">
              Ankit Services is your reliable taxi partner in Ranchi, Jharkhand—offering 24/7 safe, affordable, and on-time cab services for city rides, airport transfers, and outstation travel.
            </p>

            <div className="flex space-x-4" aria-label="Social media links">
              <Link
                href="https://www.instagram.com/ankit_services/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Visit Ankit Services on Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2" aria-label="Quick site navigation">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#booking" className="text-gray-400 hover:text-white transition-colors">Book Now</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2" aria-label="Types of rides offered">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">City Rides</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Outstation Trips</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Airport Transfers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Group Travel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic space-y-2 text-gray-400" aria-label="Company contact information">
              <p>Dhurwa, Ranchi, Jharkhand - 834004</p>
              <p>Phone: <a href="tel:+919308776501" className="hover:text-white">+91 93087 76501</a></p>
              <p>Email: <a href="mailto:ankit.services2023@gmail.com" className="hover:text-white">ankit.services2023@gmail.com</a></p>
              <p>Availability: 24/7</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ankit Services, Ranchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
