import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="max-w-2xl text-gray-700">
            Have questions or need assistance? Reach out to us using the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <Phone className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">+91 93087 76501</p>
              {/* <p className="text-gray-700">+91 12345 67890</p> */}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-700">ankit.services2023@gmail.com</p>
              {/* <p className="text-gray-700">booking@ankitservices.com</p> */}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-700">Dhurwa, Ranchi</p>
              <p className="text-gray-700">Jharkhand, 834004</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-700">Monday - Sunday</p>
              <p className="text-gray-700">24/7 Service Available</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
