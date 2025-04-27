import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-yellow-400 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">Ankit Services</h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Your reliable partner for comfortable and safe taxi services. Book your ride today!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <Link href="#booking">Book Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
