"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TfiArrowRight } from "react-icons/tfi";
import Image from "next/image";
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  receiveUpdates: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    alert("Form submitted successfully!");
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Image
        src="/bg-our-work.svg"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <main className="relative z-10 lg:pt-60 pt-52 px-6 md:pl-28 lg:pl-32 pb-10 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-20 items-start max-w-[1600px] mx-auto">
          <div className="space-y-6 lg:pt-8">
            <p className="text-white/70 text-sm md:text-base tracking-[0.2em] uppercase font-light">
              CONTACT
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-light leading-tight text-balance">
              Contact us about an opportunity, partnership or media enquiry
            </h1>
            <p className="text-white/80 text-base md:text-xl leading-6 max-w-xl">
              Please provide a brief description of your business inquiry and we
              will get back to you as soon as we can.
            </p>
          </div>

          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
              <div className="grid md:grid-cols-2">
                <div className="border border-white p-4 md:p-5">
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="First name*"
                    className="w-full bg-transparent text-white placeholder:text-white/60 outline-none text-sm md:text-base"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="border border-white border-l- md:border-l p-4 md:p-5 border-t-0 md:border-t">
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last name*"
                    className="w-full bg-transparent text-white placeholder:text-white/60 outline-none text-sm md:text-base"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="border border-white border-t-0 p-4 md:p-5">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email address*"
                    className="w-full bg-transparent text-white placeholder:text-white/60 outline-none text-sm md:text-base"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="border border-white border-l- md:border-l border-t-0 p-4 md:p-5">
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone number"
                    className="w-full bg-transparent text-white placeholder:text-white/60 outline-none text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="border border-white border-t-0 p-4 md:p-5">
                <textarea
                  {...register("message")}
                  placeholder="Your message*"
                  rows={8}
                  className="w-full bg-transparent text-white placeholder:text-white/60 outline-none resize-none text-sm md:text-base"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="border border-white border-t-0 p-4 md:p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    {...register("receiveUpdates")}
                    type="checkbox"
                    id="updates"
                    className="mt-1 w-4 h-4 bg-transparent border border-white/40 rounded-sm accent-white cursor-pointer"
                  />
                  <label
                    htmlFor="updates"
                    className="text-white text-base cursor-pointer"
                  >
                    I would like to receive updates from Satalia
                  </label>
                </div>
                <p className="text-white/60 text-xs md:text-base">
                  Please read our{" "}
                  <a
                    href="#"
                    className="text-white underline hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>{" "}
                  to see how we use your personal information.
                </p>
              </div>

              <div className="border border-white border-t-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-4 md:p-5 text-left text-white cursor-pointer hover:bg-white/5 transition-colors flex items-center  gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm md:text-base">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </span>
                  <TfiArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
