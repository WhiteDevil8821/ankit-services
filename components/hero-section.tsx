import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import home from "@/public/home.jpeg"

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-yellow-400 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={home}
          alt="Home background"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">Ankit Services</h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Your reliable partner for comfortable and safe taxi services. Book your ride today!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-black font-bold hover:bg-yellow-400 hover:text-black">
            <Link href="#booking">Book Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white text-black hover:bg-yellow-400 hover:text-black font-bold">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
