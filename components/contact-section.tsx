import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-50"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 id="contact-heading" className="text-3xl font-bold mb-4">
            Contact Ankit Services
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="max-w-2xl text-gray-700">
            Looking for a reliable taxi service in Ranchi? Reach out to Ankit Services using the details below. We&apos;re available 24/7 to assist you.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Contact methods"
        >
          {[
            {
              icon: <Phone className="h-6 w-6 text-yellow-600" />,
              label: "Phone",
              content: (
                <a href="tel:+919308776501" className="hover:underline">
                  +91 93087 76501
                </a>
              ),
            },
            {
              icon: <Mail className="h-6 w-6 text-yellow-600" />,
              label: "Email",
              content: (
                <a href="mailto:ankit.services2023@gmail.com" className="hover:underline">
                  ankit.services2023@gmail.com
                </a>
              ),
            },
            {
              icon: <MapPin className="h-6 w-6 text-yellow-600" />,
              label: "Address",
              content: (
                <address className="not-italic text-center">
                  Dhurwa, Ranchi<br />
                  Jharkhand, 834004
                </address>
              ),
            },
            {
              icon: <Clock className="h-6 w-6 text-yellow-600" />,
              label: "Working Hours",
              content: (
                <>
                  <p>Monday – Sunday</p>
                  <p>24/7 Service Available</p>
                </>
              ),
            },
          ].map(({ icon, label, content }, index) => (
            <div role="listitem" key={index} className="h-full">
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="font-semibold mb-2">{label}</h3>
                  <div className="text-gray-700">{content}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
