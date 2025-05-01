/* eslint-disable react/no-unescaped-entities */
import { Shield, Clock, ThumbsUp, Award } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 bg-white" aria-labelledby="why-choose-us-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 id="why-choose-us-heading" className="text-3xl font-bold mb-4">
            Why Choose Ankit Services in Ranchi
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="max-w-2xl text-gray-700">
            Discover what makes Ankit Services the top choice for taxi and transportation solutions in Ranchi, Jharkhand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <Shield className="h-6 w-6 text-yellow-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Trusted for Safety</h3>
              <p className="text-gray-700">
                Ankit Services prioritizes your safety with regularly maintained vehicles and skilled, trained drivers
                who follow industry-standard safety practices across all routes.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">On-Time Taxi Services</h3>
              <p className="text-gray-700">
                We ensure punctual taxi arrivals so you can stay on schedule—ideal for office commutes, airport transfers, and daily rides.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <ThumbsUp className="h-6 w-6 text-yellow-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Excellent Customer Service</h3>
              <p className="text-gray-700">
                Our courteous drivers and support staff ensure a smooth, enjoyable experience with every ride—whether short or long-distance.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <Award className="h-6 w-6 text-yellow-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Years of Industry Experience</h3>
              <p className="text-gray-700">
                With over 20 years in the transportation sector, Ankit Services understands your travel needs and delivers top-tier service every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
