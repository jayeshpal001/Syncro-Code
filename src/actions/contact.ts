"use server";


import { connectToDB } from "../lib/mongodb";
import Contact from "../models/Contact";
export async function submitContact(formData: FormData) {
  try {
    // 1. Extract data from form
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Basic validation
    if (!name || !email || !message) {
      return { success: false, error: "All fields are required." };
    }

    // 2. Connect to MongoDB
    await connectToDB();

    // 3. Save to database
    await Contact.create({
      name,
      email,
      message,
    });

    console.log(`New Lead Saved: ${email}`);

    // 4. Return success state to frontend
    return { 
      success: true, 
      message: "Thank you for reaching out. Our team will contact you shortly." 
    };

  } catch (error) {
    console.error("Database Error:", error);
    return { 
      success: false, 
      error: "Something went wrong. Please try again later." 
    };
  }
}