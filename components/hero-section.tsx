import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import home from "@/public/home.jpeg"

export default function HeroSection() {
  return (
    <header id="hero" className="relative bg-yellow-400 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={home}
          alt="Taxi cab parked in front of a city background representing Ankit Services"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      </div>

      {/* SEO-optimized Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Ankit Services – Safe, Reliable & Affordable Taxi Rides
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Book your next taxi ride with Ankit Services – your trusted travel partner for local and outstation journeys, 24/7 availability, and competitive fares.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-black font-bold hover:bg-yellow-400 hover:text-black">
            <Link href="#booking" aria-label="Book your taxi ride now">Book Your Ride</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white text-black hover:bg-yellow-400 hover:text-black font-bold">
            <Link href="#contact" aria-label="Get in touch with Ankit Taxi Services">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
