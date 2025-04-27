import { Car, MapPin, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="max-w-2xl text-gray-700">
            We offer a range of transportation services to meet your various needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Car className="h-10 w-10 text-yellow-500 mb-2" />
              <CardTitle className="text-center">City Rides</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                Comfortable and quick transportation within the city for your daily commute or errands.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <MapPin className="h-10 w-10 text-yellow-500 mb-2" />
              <CardTitle className="text-center">Outstation Trips</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                Reliable transportation for your long-distance journeys with experienced drivers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <Clock className="h-10 w-10 text-yellow-500 mb-2" />
              <CardTitle className="text-center">Airport Transfers</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                Punctual pickup and drop-off services to and from airports, ensuring you never miss your flight.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <Users className="h-10 w-10 text-yellow-500 mb-2" />
              <CardTitle className="text-center">Group Travel</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                Spacious vehicles for group travel, perfect for family outings, corporate events, or tours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
