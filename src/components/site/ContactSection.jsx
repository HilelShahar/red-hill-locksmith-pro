import { useState, useRef } from "react";
import { Phone, Mail, BadgeCheck, Send, CheckCircle2, AlertCircle, ImagePlus, X } from "lucide-react";

const PHONE_DISPLAY = "0416 807 444";
const PHONE_TEL = "+61416807444";
const EMAIL = "info@redhillsecuritylocksmith.com.au";
const ABN = "12 693 068 457";

const SERVICE_OPTIONS = [
  "Emergency Lockout Service",
  "Lock Rekeying & Lock Replacement",
  "Smart Lock Installation",
  "Safe Opening & Safe Installation",
  "Something else"
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    location: "",
    message: ""
  });
  const [errors, setErrors] = useState(/** @type {Record<string, string | undefined>} */ ({}));
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [photo, setPhoto] = useState(null); // { name, type, dataUrl }
  const [photoError, setPhotoError] = useState(null);
  const fileInputRef = useRef(null);

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setPhotoError("Please attach an image file (JPG or PNG).");
      e.target.value = "";
      return;
    }
    if (file.size > 2.5 * 1024 * 1024) {
      setPhotoError("Please use an image under 2.5 MB.");
      e.target.value = "";
      return;
    }
    setPhotoError(null);
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto({ name: file.name, type: file.type, dataUrl: reader.result });
    };
    reader.onerror = () => {
      setPhotoError("Couldn't read the image. Please try again, or call us instead.");
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validate = () => {
    /** @type {Record<string, string | undefined>} */
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.phone.trim()) errs.phone = "Please enter a phone number.";
    if (!form.service) errs.service = "Please select a service.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          photo: photo ? { name: photo.name, type: photo.type, dataUrl: photo.dataUrl } : null
        })
      });
      if (!response.ok) throw new Error("Quote request failed");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", company: "", service: "", location: "", message: "" });
      removePhoto();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 bg-muted/40 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info + CTA */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Locked out or need a lock sorted today?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Call now for immediate help, or send a quote request and we'll get
              straight back to you. For anything urgent, calling is always fastest.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-foreground">Phone (24/7)</dt>
                  <dd>
                    <a href={`tel:${PHONE_TEL}`} className="text-muted-foreground hover:text-primary hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-foreground">Email</dt>
                  <dd>
                    <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary hover:underline">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-foreground">ABN</dt>
                  <dd className="text-muted-foreground">{ABN}</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">Get a free quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what you need and we'll come back with honest, up-front pricing.
            </p>

            {status === "success" && (
              <div
                role="status"
                className="mt-5 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Thanks — your request has been sent.</p>
                  <p className="mt-0.5">We'll be in touch shortly. For anything urgent, call {PHONE_DISPLAY}.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Something went wrong.</p>
                  <p className="mt-0.5">Please try again, or call {PHONE_DISPLAY} and we'll help right away.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              <Field
                label="Name"
                id="name"
                required
                value={form.name}
                onChange={update("name")}
                error={errors.name}
                autoComplete="name"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Phone"
                  id="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  error={errors.phone}
                  autoComplete="tel"
                />
                <Field
                  label="Email (optional)"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  label="Service needed"
                  id="service"
                  required
                  value={form.service}
                  onChange={update("service")}
                  error={errors.service}
                  options={SERVICE_OPTIONS}
                />
                <Field
                  label="Suburb / location"
                  id="location"
                  value={form.location}
                  onChange={update("location")}
                />
              </div>
              <Field
                label="Company (optional)"
                id="company"
                value={form.company}
                onChange={update("company")}
                autoComplete="organization"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <span className="block text-sm font-medium text-foreground">
                  Photo of the lock or door (optional)
                </span>
                {!photo ? (
                  <>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-1.5 flex w-full items-center justify-center gap-2 rounded-md border border-dashed border-input bg-muted/40 px-4 py-6 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ImagePlus className="h-5 w-5" aria-hidden="true" />
                      Attach an image of the lock or door
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                      aria-label="Attach an image of the lock or door"
                    />
                  </>
                ) : (
                  <div className="mt-1.5 flex items-center gap-3 rounded-md border border-border bg-muted/40 p-3">
                    <img
                      src={photo.dataUrl}
                      alt="Preview of attached photo"
                      className="h-14 w-14 rounded object-cover"
                    />
                    <span className="flex-1 truncate text-sm text-foreground">{photo.name}</span>
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-foreground hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Remove attached photo"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}
                {photoError && (
                  <p role="alert" className="mt-1 text-xs font-medium text-red-600">{photoError}</p>
                )}
                <p className="mt-1 text-xs text-muted-foreground">
                  A photo of the lock, door or safe helps us quote more accurately.
                </p>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {status === "submitting" ? "Sending…" : "Send quote request"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Locked out right now? Don't wait — call{" "}
                <a href={`tel:${PHONE_TEL}`} className="font-semibold text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, required = false, type = "text", value, onChange, error = undefined, autoComplete = undefined }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary" aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-1.5 block w-full rounded-md border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
          error ? "border-red-400 focus:border-red-500" : "border-input focus:border-primary"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ label, id, required, value, onChange, error, options }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary" aria-hidden="true"> *</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-1.5 block w-full rounded-md border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring ${
          error ? "border-red-400 focus:border-red-500" : "border-input focus:border-primary"
        } ${!value ? "text-muted-foreground" : ""}`}
      >
        <option value="" disabled>Select a service</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-foreground">{o}</option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}