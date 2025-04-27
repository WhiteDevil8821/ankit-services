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
            Ankit Services is a premier taxi booking company dedicated to providing exceptional transportation services.
            With years of experience in the industry, we have built a reputation for reliability, safety, and customer
            satisfaction.
          </p>
          <p className="text-lg text-gray-700">
            Our fleet of well-maintained vehicles and team of professional drivers ensure that you reach your
            destination comfortably and on time. Whether you need a ride for a short trip within the city or a
            long-distance journey, Ankit Services has got you covered.
          </p>
        </div>
      </div>
    </section>
  )
}
