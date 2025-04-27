/* eslint-disable react/no-unescaped-entities */
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="max-w-2xl text-gray-700">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-t-4 border-yellow-500">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I've been using Ankit Services for my daily commute to work for the past six months, and I couldn't be
                happier with their service. The drivers are always punctual and professional."
              </p>
              <div className="font-semibold">Rahul Sharma</div>
              <div className="text-sm text-gray-500">Regular Customer</div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-yellow-500">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "We booked Ankit Services for our family trip to Shimla, and it was a great experience. The vehicle was
                comfortable, and the driver was knowledgeable about the routes and local attractions."
              </p>
              <div className="font-semibold">Priya Patel</div>
              <div className="text-sm text-gray-500">Family Traveler</div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-yellow-500">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "As a business traveler, I need reliable transportation services. Ankit Services has never disappointed
                me. Their airport pickup service is prompt, and the drivers are courteous."
              </p>
              <div className="font-semibold">Vikram Singh</div>
              <div className="text-sm text-gray-500">Business Executive</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
