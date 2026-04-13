"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/src/actions/contact";

export const ContactSection = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAction = async (formData: FormData) => {
    setIsPending(true);
    const result = await submitContact(formData);
    setIsPending(false);
    
    if (result.success) {
      setIsSuccess(true);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-black py-15 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Let's Build Something <span className="text-blue-500">Legendary</span>
          </h2>
          <p className="text-gray-400 md:text-lg">
            Ready to scale your business? Drop us a message and our experts will get back to you.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md md:p-12"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle2 className="mb-4 text-green-500" size={64} />
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="mt-2 text-gray-400">We will review your requirements and get in touch soon.</p>
            </motion.div>
          ) : (
            <form action={handleAction} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5}
                  className="resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell us about your requirements, timeline, and budget..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};