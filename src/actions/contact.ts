// src/actions/contact.ts
"use server";

export async function submitContact(formData: FormData) {
  // Simulate processing time for a smooth UX
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Aage chalkar hum is data ko MongoDB mein save karenge
  console.log("New Lead Received:", { name, email, message });

  // Returning success state
  return { 
    success: true, 
    message: "Thank you for reaching out. Our team will contact you shortly." 
  };
}