import { useState } from "react";
import Section from "./Section";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    designation: "",
    country: "",
    city: "",
    state: "",
    phoneNo: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});

  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOe6jApRf7KEVxsC-A8LtpujxZKmIygqg_2k9XOJWkIsSgkWBERkERObLcVmttM2Tf/exec";

  const mandatoryFields = ["name", "email", "organisation", "country", "city", "state", "phoneNo"];

  const validateForm = () => {
    const newErrors = {};

    // Check mandatory fields
    mandatoryFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    if (formData.phoneNo && !/^[0-9]{10}$/.test(formData.phoneNo.replace(/[-\s]/g, ""))) {
      newErrors.phoneNo = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitMessage("");

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Form submitted successfully! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          organisation: "",
          designation: "",
          state: "",
          phoneNo: "",
        });
      } else {
        setSubmitMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error submitting form. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_10%,rgba(253,197,31,.35),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.16),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-peacock)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            GET IN TOUCH
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[color:var(--color-brand)]">
            Join the PURBI Movement
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-[color:var(--color-ink)]/65">
            Share your interest in becoming part of our global network. Fill out the form below and we'll connect with you soon.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-[28px] border border-[color:var(--color-border)] bg-white/70 backdrop-blur shadow-lg p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phoneNo
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.phoneNo && <p className="mt-1 text-xs text-red-500">{errors.phoneNo}</p>}
            </div>

            {/* Organisation Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Organisation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Your organization"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.organisation
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.organisation && <p className="mt-1 text-xs text-red-500">{errors.organisation}</p>}
            </div>

            {/* Designation Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Your designation"
                className="w-full px-4 py-3 rounded-lg border border-[color:var(--color-border)] bg-white/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition"
              />
            </div>


            {/* Country Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.country
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              >
                <option value="">Select your country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Singapore">Singapore</option>
                <option value="Japan">Japan</option>
                <option value="Other">Other</option>
              </select>
              {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
            </div>

            {/* City Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.city
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
            </div>

            {/* State Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Your state"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.state
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-semibold text-[color:var(--color-brand)] mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phoneNo
                    ? "border-red-500 bg-red-50"
                    : "border-[color:var(--color-border)] bg-white/50"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)] transition`}
              />
              {errors.phoneNo && <p className="mt-1 text-xs text-red-500">{errors.phoneNo}</p>}
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`p-4 rounded-lg text-sm font-medium ${
                submitMessage.includes("successfully")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {submitMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full px-6 py-3 text-base font-semibold text-[#2a1606] bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))] hover:brightness-105 active:brightness-95 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? "Submitting..." : "Submit Form"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-[color:var(--color-ink)]/50">
            <span className="text-red-500">*</span> Indicates required fields
          </p>
        </div>
      </div>
    </Section>
  );
}

export default ContactForm;
