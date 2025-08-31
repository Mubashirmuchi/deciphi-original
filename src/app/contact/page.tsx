"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, XCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
    service: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const services = [
    "penetration-testing",
    "vulnerability-assessment",
    "security-audit",
    "compliance-consulting",
    "incident-response",
    "security-training",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    setErrors((prev) => ({ ...prev, service: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Validate required fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      service: !formData.service,
    };

    console.log("newErrors:", newErrors);
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pb-5 md:pt-40 pt-40">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Section: Content */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-6 md:gap-8">
            <Button
              variant="outline"
              className="border border-gray-300 bg-white hover:bg-gray-100 transition-colors duration-300 text-gray-800 font-semibold flex items-center gap-2"
            >
              <div className="bg-green-500 w-3 h-3 rounded-full"></div>
              Contact Us
            </Button>

            <h1 className="text-center lg:text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-semibold leading-tight text-gray-900">
              Get in Touch
              <br />
              <span className="bg-[#E85744] text-white px-3 py-1 rounded-lg mr-2">
                with Us
              </span>
              We’re Here to Assist You
            </h1>

            <p className="text-center lg:text-left text-base sm:text-lg md:text-xl font-sans leading-relaxed text-gray-600 max-w-lg">
              Reach out to our cybersecurity experts for tailored solutions to
              secure your business.
            </p>
          </div>

          {/* Right Section: Form */}
          <Card className="w-full bg-white shadow-lg rounded-xl overflow-path">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-gray-600 text-base md:text-lg">
                Fill out the form below, and we’ll respond promptly.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:border-[#E85744] focus:ring-[#E85744] transition-colors duration-200`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      This field is required
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className={`border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-[#E85744] focus:ring-[#E85744] transition-colors duration-200`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      This field is required
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-sm font-medium text-gray-700"
                  >
                    Service *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger
                      className={`w-full border ${
                        errors.service ? "border-red-500" : "border-gray-300"
                      } focus:border-[#E85744] focus:ring-[#E85744] transition-colors duration-200`}
                    >
                      <SelectValue placeholder="Select a cybersecurity service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-300">
                      {services.map((service) => (
                        <SelectItem
                          className="hover:bg-gray-100"
                          key={service}
                          value={service}
                        >
                          {service
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-red-500">
                      This field is required
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cybersecurity needs, current infrastructure, and any specific challenges you're facing..."
                    className={`border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:border-[#E85744] focus:ring-[#E85744] transition-colors duration-200`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">
                      This field is required
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-primary)] hover:bg-[#d14334] text-white font-semibold py-3 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <Alert className="border-green-200 bg-green-50 text-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <AlertDescription>
                      Thank you! Your message has been sent successfully.
                      We&apos;ll get back to you within 24 hours.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert className="border-red-200 bg-red-50 text-red-800">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <AlertDescription>
                      Sorry, there was an error sending your message. Please
                      check your connection and try again.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
