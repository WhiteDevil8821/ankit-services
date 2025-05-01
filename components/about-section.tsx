import { Car } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <Car className="h-12 w-12 text-yellow-500 mb-4" aria-hidden="true" />
          <h2 id="about-heading" className="text-3xl font-extrabold mb-4">
            About Ankit Services – Reliable and Safe Taxi Transportation in Ranchi
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ankit Services is a leading transportation company based in Ranchi, Jharkhand, offering safe, dependable, and customer-focused travel solutions. With over 20 years of industry experience, we’ve built a reputation for quality and trust.
          </p>
          <p className="text-lg text-gray-700">
            Whether you need a ride within Ranchi or a long-distance journey, our professionally maintained vehicles and skilled drivers are here to ensure a smooth, on-time, and comfortable experience. Ankit Services is your go-to partner for hassle-free travel.
          </p>
        </div>
      </div>
    </section>
  )
}
