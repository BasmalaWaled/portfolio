import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "hello@hany.dev",
    href: "mailto:hello@hany.dev",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+20 100 123 4567",
    href: "tel:+201001234567",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Cairo, Egypt",
    href: "#",
  },
  {
    icon: Clock,
    label: "AVAILABILITY",
    value: "Open to new projects",
    href: "#",
  },
];


const faqs = [
  {
    question: "What is your typical response time?",
    answer:
      "I usually respond within 24–48 business hours to all inquiries, ensuring each message gets the attention it deserves.",
  },
  {
    question: "Do you take freelance work?",
    answer:
      "Yes! I am currently open to freelance projects, especially high-impact web and mobile applications.",
  },
  {
    question: "Can we schedule a call?",
    answer:
      "Absolutely. Once you send me a message, we can arrange a convenient time to discuss your project in more detail.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients across different countries and time zones and am comfortable with remote collaboration.",
  },
];

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // هنا ممكن بعدين تربطي الفورم بالـ backend أو EmailJS أو Formspree
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 text-center lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-foreground">Contact </span>
          <span className="text-primary">Me</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/50">
          Let's work together on your next project.
        </p>

        <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-brand-gradient" />
      </section>

    {/* Contact Section */}
<section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
  <div className="grid gap-5 lg:grid-cols-[270px_1fr]">

    {/* ================= CONTACT INFO ================= */}
    <div className="rounded-xl border border-white/[0.07] bg-[#1b1d21] p-5">

      <div className="space-y-6">
        {contactInfo.map(
          ({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-start gap-3"
            >
              {/* Icon */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500 transition-colors group-hover:bg-violet-500/20">
                <Icon className="h-3.5 w-3.5" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-[8px] font-semibold uppercase tracking-wider text-violet-400">
                  {label}
                </p>

                <p className="mt-1 break-words text-[10px] leading-relaxed text-white/55 transition-colors group-hover:text-white/80">
                  {value}
                </p>
              </div>
            </a>
          )
        )}
      </div>

      {/* ================= LET'S CONNECT ================= */}
      <div className="mt-8">
        <p className="text-[10px] font-bold text-white">
          Let's Connect
        </p>

        <div className="mt-3 flex gap-2">

          <a
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.07] bg-[#202228] text-[9px] font-bold text-white/50 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
          >
            GH
          </a>

          <a
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.07] bg-[#202228] text-[9px] font-bold text-white/50 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
          >
            in
          </a>

          <a
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.07] bg-[#202228] text-[9px] font-bold text-white/50 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
          >
            X
          </a>

          <a
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.07] bg-[#202228] text-[9px] font-bold text-white/50 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
          >
            IG
          </a>

        </div>
      </div>

    </div>


    {/* ================= CONTACT FORM ================= */}
    <div className="rounded-xl border border-white/[0.07] bg-[#1b1d21] p-5 sm:p-6">

      <form onSubmit={handleSubmit}>

        {/* Name + Email */}
        <div className="grid gap-5 sm:grid-cols-2">

          <div>
            <label
              htmlFor="name"
              className="text-[9px] font-semibold text-white/55"
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="What's your name?"
              required
              className="mt-2 h-9 w-full rounded-md border border-white/[0.06] bg-[#202228] px-3 text-[10px] text-white outline-none placeholder:text-white/20 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-[9px] font-semibold text-white/55"
            >
              Your Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
className="mt-2 h-9 w-full rounded-md border border-white/[0.06] bg-[#202228] px-3 text-[10px] text-white outline-none placeholder:text-white/20 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/10"
            />
          </div>

        </div>


        {/* Subject */}
        <div className="mt-5">
          <label
            htmlFor="subject"
            className="text-[9px] font-semibold text-white/55"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project Inquiry / General Question"
            required
            className="mt-2 h-9 w-full rounded-md border border-white/[0.06] bg-[#202228] px-3 text-[10px] text-white outline-none placeholder:text-white/20 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/10"
          />
        </div>


        {/* Message */}
        <div className="mt-5">
          <label
            htmlFor="message"
            className="text-[9px] font-semibold text-white/55"
          >
            Your Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project, goals, and timeline..."
            required
            className="mt-2 w-full resize-none rounded-md border border-white/[0.06] bg-[#202228] px-3 py-2.5 text-[10px] leading-relaxed text-white outline-none placeholder:text-white/20 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/10"
          />
        </div>


        {/* Submit */}
       <button
  type="submit"
  className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#6366F1] text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:bg-[#5B5FEF] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
>
  <Send className="h-4 w-4" />
  Send Message
</button>
      </form>

    </div>

  </div>
</section>
 {/* FAQ */}
<section className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-8">

  {/* Header */}
  <div className="text-center">
    <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
      Common Questions
    </h2>

    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-foreground/45">
      Everything you need to know about starting a project with me.
    </p>
  </div>

  {/* FAQ Grid */}
  <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">

    {faqs.map((faq) => (
      <div
        key={faq.question}
        className="min-h-[160px] rounded-xl bg-[#1d2023] px-7 py-7 transition-colors duration-300 hover:bg-[#22252a]"
      >
        <h3 className="text-sm font-bold leading-relaxed text-primary">
          {faq.question}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/50">
          {faq.answer}
        </p>
      </div>
    ))}

  </div>

</section>
    </div>
  );
}