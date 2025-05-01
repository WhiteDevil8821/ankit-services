import { Car, MapPin, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 id="services-heading" className="text-3xl font-bold mb-4">
            Transportation Services by Ankit Services
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="max-w-2xl text-gray-700">
            Discover our reliable and affordable taxi services in Ranchi and beyond, tailored for every kind of travel need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Car className="h-10 w-10 text-yellow-500 mb-2" aria-hidden="true" />
              <CardTitle className="text-center">City Taxi Rides in Ranchi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                Fast, comfortable, and affordable city cab services for your daily travel, errands, or office commutes across Ranchi.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <MapPin className="h-10 w-10 text-yellow-500 mb-2" aria-hidden="true" />
              <CardTitle className="text-center">Outstation Cab Booking</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                Book dependable outstation taxi rides for weekend getaways or long-distance travel across Jharkhand and neighboring states.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <Clock className="h-10 w-10 text-yellow-500 mb-2" aria-hidden="true" />
              <CardTitle className="text-center">Airport Pickup & Drop</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                On-time airport transfer services in Ranchi with real-time tracking to ensure stress-free departures and arrivals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <Users className="h-10 w-10 text-yellow-500 mb-2" aria-hidden="true" />
              <CardTitle className="text-center">Group Travel & Tours</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                Spacious and comfortable transportation solutions for group events, family outings, weddings, and corporate functions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
