/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendBookingEmail } from "@/app/actions"

export default function BookingFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [tripType, setTripType] = useState<"one-way" | "two-way">("one-way")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleTripTypeChange = (type: "one-way" | "two-way") => {
    setTripType(type)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        travelers: formData.get("travelers") as string,
        tripType: tripType,
        pickupAddress: formData.get("pickupAddress") as string,
        dropAddress: tripType === "one-way" ? (formData.get("dropAddress") as string) : undefined,
        days: tripType === "two-way" ? (formData.get("days") as string) : undefined,
        travelDestination: tripType === "two-way" ? (formData.get("travelDestination") as string) : undefined,
      }

      console.log("Submitting form data:", data)
      const result = await sendBookingEmail(data)
      console.log("Form submission result:", result)

      if (result.success) {
        setFormSubmitted(true)
        formRef.current?.reset()
      } else {
        setErrorMessage("Failed to submit form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Book Your Ride</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="max-w-2xl text-gray-700">
            Fill out the form below to book your taxi. We'll get back to you shortly to confirm your booking.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Booking Form</CardTitle>
            <CardDescription>Please provide all the necessary details for your trip</CardDescription>
          </CardHeader>
          <CardContent>
            {formSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Booking Request Submitted!</h3>
                <p className="mb-4">We'll contact you shortly to confirm your booking.</p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Book Another Ride
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md">{errorMessage}</div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="Your contact number" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <Input id="travelers" name="travelers" type="number" min="1" placeholder="e.g., 2" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Trip Type</Label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="one-way"
                        name="tripType"
                        checked={tripType === "one-way"}
                        onChange={() => handleTripTypeChange("one-way")}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="one-way">One-way Trip</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="two-way"
                        name="tripType"
                        checked={tripType === "two-way"}
                        onChange={() => handleTripTypeChange("two-way")}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="two-way">Two-way Trip</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickupAddress">Pickup Address</Label>
                  <Textarea id="pickupAddress" name="pickupAddress" placeholder="Enter your pickup location" required />
                </div>

                {tripType === "one-way" && (
                  <div className="space-y-2">
                    <Label htmlFor="dropAddress">Drop Address</Label>
                    <Textarea id="dropAddress" name="dropAddress" placeholder="Enter your destination" required />
                  </div>
                )}

                {tripType === "two-way" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="days">Number of Days</Label>
                        <Input id="days" name="days" type="number" min="1" placeholder="e.g., 3" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="travelDestination">Travel Destination</Label>
                        <Input
                          id="travelDestination"
                          name="travelDestination"
                          placeholder="Where are you traveling to?"
                        />
                      </div>
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Now"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
