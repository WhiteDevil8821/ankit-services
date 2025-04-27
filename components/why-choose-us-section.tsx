/* eslint-disable react/no-unescaped-entities */
import { Shield, Clock, ThumbsUp, Award } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="max-w-2xl text-gray-700">Here's why Ankit Services stands out from the competition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <Shield className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-700">
                All our vehicles undergo regular maintenance checks, and our drivers are trained in safe driving
                practices to ensure your safety.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Punctuality</h3>
              <p className="text-gray-700">
                We value your time and ensure that our taxis arrive at the pickup location promptly, every time.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <ThumbsUp className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-700">
                Our friendly and professional drivers are committed to providing a pleasant travel experience for all
                our customers.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-700">
                With years of experience in the transportation industry, we have the expertise to handle all your travel
                needs efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
