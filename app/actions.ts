"use server"

type BookingData = {
  name: string
  email: string
  phone: string
  travelers: string
  tripType: "one-way" | "two-way"
  pickupAddress: string
  dropAddress?: string
  days?: string
  travelDestination?: string
}

export async function sendBookingEmail(data: BookingData) {
  try {
    // Get the access key from environment variables
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not defined in environment variables")
      throw new Error("API key not configured")
    }

    // Create form data object
    const formData = new FormData()
    formData.append("access_key", accessKey)
    formData.append("from_name", "Ankit Services Booking")
    formData.append("subject", `New Booking Request from ${data.name}`)

    // Add all form fields
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    formData.append("travelers", data.travelers)
    formData.append("trip_type", data.tripType)
    formData.append("pickup_address", data.pickupAddress)

    if (data.tripType === "one-way" && data.dropAddress) {
      formData.append("drop_address", data.dropAddress)
    }

    if (data.tripType === "two-way") {
      if (data.days) formData.append("days", data.days)
      if (data.travelDestination) formData.append("travel_destination", data.travelDestination)
    }

    // Format message content for email body
    let message = `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Number of Travelers: ${data.travelers}
      Trip Type: ${data.tripType === "one-way" ? "One-way Trip" : "Two-way Trip"}
      Pickup Address: ${data.pickupAddress}
    `

    if (data.tripType === "one-way" && data.dropAddress) {
      message += `\nDrop Address: ${data.dropAddress}`
    }

    if (data.tripType === "two-way") {
      if (data.days) {
        message += `\nNumber of Days: ${data.days}`
      }
      if (data.travelDestination) {
        message += `\nTravel Destination: ${data.travelDestination}`
      }
    }

    formData.append("message", message)

    // Send the form data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()

    if (result.success) {
      return { success: true, message: "Form submitted successfully" }
    } else {
      console.error("Error submitting form:", result)
      throw new Error(result.message || "Failed to submit form")
    }
  } catch (error) {
    console.error("Error in sendBookingEmail:", error)
    throw new Error("Failed to process booking. Please try again.")
  }
}
