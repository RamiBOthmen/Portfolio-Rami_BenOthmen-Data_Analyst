"use client";

import Section from "@/components/Section";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again."
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Reach out for roles, collaborations, or questions.</p>
      </div>
      <Section title="" subtitle="">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/50">
            <ul className="grid gap-2 text-sm">
              <li><span className="font-medium">Email:</span> <Link className="text-sky-700 dark:text-sky-300 hover:underline" href="mailto:ramibenothmen15@gmail.com">ramibenothmen15@gmail.com</Link></li>
              {/* <li><span className="font-medium">Phone:</span> <Link className="text-sky-700 dark:text-sky-300 hover:underline" href="tel:+21656221578">+216 56221578</Link></li> */}
              <li><span className="font-medium">LinkedIn:</span> <Link className="text-sky-700 dark:text-sky-300 hover:underline" target="_blank" href="https://www.linkedin.com/in/rami-ben-othmen">linkedin.com/in/rami-ben-othmen</Link></li>
              <li><span className="font-medium">GitHub:</span> <Link className="text-sky-700 dark:text-sky-300 hover:underline" target="_blank" href="https://github.com/RBenOthmen">github.com/RBenOthmen</Link></li>
              {/* <li><span className="font-medium">Portfolio:</span> <Link className="text-sky-700 dark:text-sky-300 hover:underline" target="_blank" href="https://rami-ben-othmen-portfolio.onrender.com">rami-ben-othmen-portfolio.onrender.com</Link></li> */}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/50 grid gap-3"
          >
            {submitStatus.type && (
              <div className={`p-3 rounded-md text-sm ${
                submitStatus.type === "success" 
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200" 
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <label className="text-sm">
              Name
              <input 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 p-2" 
                required 
                disabled={isSubmitting}
              />
            </label>
            <label className="text-sm">
              Email
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 p-2" 
                required 
                disabled={isSubmitting}
              />
            </label>
            <label className="text-sm">
              Message
              <textarea 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 p-2" 
                required 
                disabled={isSubmitting}
              />
            </label>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
} 