"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TfiArrowRight } from "react-icons/tfi";
import Image from "next/image";
import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@radix-ui/react-dialog";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { DialogOverlay } from "@radix-ui/react-dialog";


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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogIcon, setDialogIcon] = useState<React.ReactNode>(null);
  const [dialogBg, setDialogBg] = useState<string>("bg-red-500");

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
    setDialogMessage("Submitting your inquiry. Thank you for your patience.");
    setDialogIcon(<FiLoader className="animate-spin w-6 h-6 text-foreground" />);
    setDialogBg("bg-primary");
    setDialogOpen(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setDialogMessage(
          "Your message has been successfully sent! Our team will review it and get back to you shortly."
        );
        setDialogIcon(<AiOutlineCheckCircle className="w-6 h-6 text-green-500" />);
        setDialogBg("bg-primary");
        reset();
      } else {
        setDialogMessage(
          "Unfortunately, your message could not be sent. Please try again later or contact us directly via email."
        );
        setDialogIcon(<AiOutlineCloseCircle className="w-6 h-6 text-red-700" />);
        setDialogBg("bg-primary");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setDialogMessage(
        "An unexpected error occurred while sending your message. Please check your connection and try again."
      );
      setDialogIcon(<AiOutlineCloseCircle className="w-6 h-6 text-red-700" />);
      setDialogBg("bg-primary");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Image
        src="/bg-our-work.svg"
        alt="Contact Background"
        width={100}
        height={100}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <main className="relative z-10 lg:pt-60 pt-52 px-6 md:pl-28 lg:pl-32 pb-10 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-20 items-start max-w-[1600px] mx-auto">
          <div className="space-y-6 lg:pt-8">
            <p className="text-foreground/70 text-sm md:text-base tracking-[0.2em] uppercase font-light">
              CONTACT
            </p>
            <h1 className="text-foreground text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-light leading-tight text-balance">
              Tell us about your website, mobile app, software, or support needs
            </h1>
            <p className="text-foreground/80 text-base md:text-xl leading-6 max-w-xl">
              Share a short description of your project and the Diba Tech team
              will get back to you with the next practical step.
            </p>
          </div>

          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
              <div className="grid md:grid-cols-2">
                <div className="border border-foreground p-4 md:p-5">
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="First name*"
                    className="w-full bg-transparent text-foreground placeholder:text-foreground/60 outline-none text-base md:text-lg"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="border border-foreground border-l- md:border-l p-4 md:p-5 border-t-0 md:border-t">
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last name*"
                    className="w-full bg-transparent text-foreground placeholder:text-foreground/60 outline-none text-base md:text-lg"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="border border-foreground border-t-0 p-4 md:p-5">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email address*"
                    className="w-full bg-transparent text-foreground placeholder:text-foreground/60 outline-none text-base md:text-lg"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="border border-foreground border-l- md:border-l border-t-0 p-4 md:p-5">
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone number"
                    className="w-full bg-transparent text-foreground placeholder:text-foreground/60 outline-none text-base md:text-lg"
                  />
                </div>
              </div>

              <div className="border border-foreground border-t-0 p-4 md:p-5">
                <textarea
                  {...register("message")}
                  placeholder="Your message*"
                  rows={8}
                  className="w-full bg-transparent text-foreground placeholder:text-foreground/60 outline-none resize-none text-base md:text-lg"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="border border-foreground border-t-0 p-4 md:p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    {...register("receiveUpdates")}
                    type="checkbox"
                    id="updates"
                    className="mt-1 w-4 h-4 bg-transparent border border-foreground/40 rounded-sm accent-foreground cursor-pointer"
                  />
                  <label
                    htmlFor="updates"
                    className="text-foreground text-base cursor-pointer"
                  >
                    I would like to receive updates from Diba Tech
                  </label>
                </div>
                <p className="text-foreground/60 text-xs md:text-base">
                  Please read our{" "}
                  <a
                    href="/privacy"
                    className="text-foreground underline hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>{" "}
                  to see how we use your personal information.
                </p>
              </div>

              <div className="border border-foreground border-t-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-4 md:p-5 text-left text-foreground cursor-pointer hover:bg-foreground/5 transition-colors flex items-center  gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
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
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/30" />
        <DialogContent className={`${dialogBg} fixed top-1/2 left-1/2 z-50 text-foreground -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg`}>
          <DialogHeader className="flex items-center gap-4 text-xl">
            {dialogIcon}
            <DialogTitle>Message Status</DialogTitle>
          </DialogHeader>
          <DialogDescription className="mt-2 text-lg">{dialogMessage}</DialogDescription>
          <div className="mt-4 flex justify-end">
            <DialogClose className="bg-foreground text-primary cursor-pointer px-4 py-2 rounded">
              Close
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
