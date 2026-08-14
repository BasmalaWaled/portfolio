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
      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-card/50 p-6 shadow-xl">
            <div className="space-y-7">
              {contactInfo.map(
                ({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold tracking-wider text-primary">
                        {label}
                      </p>

                      <p className="mt-1 text-xs text-foreground/70 transition-colors group-hover:text-primary">
                        {value}
                      </p>
                    </div>
                  </a>
                )
              )}
            </div>

         [8/14/2026 3:32 AM] Basmala Waled: {/* Let's Connect */}
          <div className="mt-10">
            <p className="text-sm font-bold">Let's Connect</p>

            <div className="mt-4 flex gap-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-muted/40 text-xs font-bold text-foreground/60 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                GH
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-muted/40 text-xs font-bold text-foreground/60 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-muted/40 text-xs font-bold text-foreground/60 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                X
              </a>
            </div>
          </div>

        </div>
        {/* هنا انتهى كارت Contact Information */}

        {/* Contact Form */}
        <div className="rounded-2xl border border-white/10 bg-card/50 p-6 shadow-xl sm:p-8">
          <form onSubmit={handleSubmit}>

            {/* Name + Email */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-foreground/70"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="What's your name?"
                  required
                  className="mt-3 h-11 w-full rounded-lg border border-white/10 bg-background/50 px-4 text-sm text-foreground outline-none placeholder:text-foreground/25 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-foreground/70"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="mt-3 h-11 w-full rounded-lg border border-white/10 bg-background/50 px-4 text-sm text-foreground outline-none placeholder:text-foreground/25 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="subject"
                className="text-xs font-medium text-foreground/70"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry / General Question"
                required
                className="mt-3 h-11 w-full rounded-lg border border-white/10 bg-background/50 px-4 text-sm text-foreground outline-none placeholder:text-foreground/25 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-xs font-medium text-foreground/70"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project, goals, and timeline..."
                required
 className="mt-3 w-full resize-none rounded-lg border border-white/10 bg-background/50 p-4 text-sm text-foreground outline-none placeholder:text-foreground/25 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-gradient text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.01]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>

    {/* FAQ */}
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-8">         <div className="text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Common Questions
          </h2>

          <p className="mt-3 text-sm text-foreground/50">
            Everything you need to know about starting a project with me.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-x-16 gap-y-10 sm:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-sm font-semibold text-primary">
                {faq.question}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-foreground/50">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}