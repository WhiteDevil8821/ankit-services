import { Car } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <Car className="h-12 w-12 text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold mb-4">About Ankit Services</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
          Ankit Services is a leading taxi company based in Ranchi, Jharkhand, known for safe, reliable, and customer-focused transportation. With over 20 years of experience, we have earned the trust of our customers through our quality service.
          </p>
          <p className="text-lg text-gray-700">
          Our fleet of well-maintained vehicles and professional drivers ensures you reach your destination safely, comfortably, and on time. Whether it’s a short trip within Ranchi or a long-distance journey, Ankit Services is here for you.
          </p>
        </div>
      </div>
    </section>
  )
}
