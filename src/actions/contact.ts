"use server";


import { Resend } from "resend";
import Contact from "../models/Contact";
import { connectToDB } from "../lib/mongodb";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required." };
    }

    // 1. Save to Database
    await connectToDB();
    await Contact.create({ name, email, message });

    // 2. Fire Async Email Notification via Resend (0 lag to frontend)
    // Resend by default 'onboarding@resend.dev' se bhejne allow karta hai jab tak aap custom domain verify na karein
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Baad me isko contact@syncrocode.in kar denge
      to: process.env.ADMIN_EMAIL as string, // Aapka Gmail
      subject: `🚨 New Agency Lead: ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log(`Lead Saved & Notified: ${email}`);

    return { 
      success: true, 
      message: "Thank you! We will get back to you shortly." 
    };

  } catch (error) {
    console.error("Action Error:", error);
    return { 
      success: false, 
      error: "Something went wrong. Please try again later." 
    };
  }
}

// src/actions/contact.ts ke end mein add karein

export async function getLeads() {
  try {
    await connectToDB();
    
    // Sort by latest leads first
    const leads = await Contact.find({}).sort({ createdAt: -1 });
    
    return {
      success: true,
      data: JSON.parse(JSON.stringify(leads))
    };
  } catch (error) {
    console.error("Error fetching leads:", error);
    return { success: false, error: "Failed to fetch leads" };
  }
}