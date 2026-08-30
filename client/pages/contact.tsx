import { Send } from "lucide-react";

import {
  contactInfo,
  socialLinks,
  faqs,
  contactPageData,
} from "../data/contactData";

export default function Contact() {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    alert(contactPageData.form.successMessage);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ================= PAGE HEADER ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 text-center lg:px-8">

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">

          <span className="text-foreground">
            {contactPageData.header.title}{" "}
          </span>

          <span className="text-primary">
            {contactPageData.header.highlight}
          </span>

        </h1>


        <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/50">

          {contactPageData.header.description}

        </p>


        <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-brand-gradient" />

      </section>



      {/* ================= CONTACT SECTION ================= */}

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">

        <div className="grid gap-5 lg:grid-cols-[270px_1fr]">


          {/* ================= CONTACT INFO ================= */}

          <div className="rounded-xl border border-white/[0.07] bg-[#1b1d21] p-5">

            <div className="space-y-6">

              {contactInfo.map(
                ({
                  icon: Icon,
                  label,
                  value,
                  href,
                }) => (

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

                {contactPageData.connect.title}

              </p>


              <div className="mt-3 flex gap-2">

                {socialLinks.map((social) => (

                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.07] bg-[#202228] text-[9px] font-bold text-white/50 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                  >

                    {social.label}

                  </a>

                ))}

              </div>

            </div>

          </div>



          {/* ================= CONTACT FORM ================= */}

          <div className="rounded-xl border border-white/[0.07] bg-[#1b1d21] p-5 sm:p-6">

            <form onSubmit={handleSubmit}>


              {/* ================= NAME + EMAIL ================= */}

              <div className="grid gap-5 sm:grid-cols-2">


                {/* Name */}

                <div>

                  <label
                    htmlFor="name"
                    className="text-[9px] font-semibold text-white/55"
                  >

                    {contactPageData.form.name.label}

                  </label>


                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={
                      contactPageData.form.name.placeholder
                    }
                    required
                    className="mt-2 h-9 w-full rounded-md border border-white/[0.06] bg-[#202228] px-3 text-[10px] text-white outline-none placeholder:text-white/20 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/10"
                  />

                </div>



                {/* Email */}

                <div>

                  <label
                    htmlFor="email"
                    className="text-[9px] font-semibold text-white/55"
                  >

                    {contactPageData.form.email.label}

                  </label>


                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={
                      contactPageData.form.email.placeholder
                    }
                    required
                    className="mt-2 h-9 w-full rounded-md border border-white/[0.06] bg-[#202228] px-3 text-[10px] text-white outline-none placeholder:text-white/20 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/10"
                  />

                </div>

              </div>



              {/* ================= SUBJECT ================= */}

              <div className="mt-5">

                <label
                  htmlFor="subject"
                  className="text-[9px] font-semibold text-white/55"
                >

                  {contactPageData.form.subject.label}

                </label>


                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={
                    contactPageData.form.subject.placeholder
                  }
                  required
                  className="mt-2 h-9 w-full rounded-md border border-white/[0.06] bg-[#202228] px-3 text-[10px] text-white outline-none placeholder:text-white/20 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/10"
                />

              </div>



              {/* ================= MESSAGE ================= */}

              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="text-[9px] font-semibold text-white/55"
                >

                  {contactPageData.form.message.label}

                </label>


                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={
                    contactPageData.form.message.placeholder
                  }
                  required
                  className="mt-2 w-full resize-none rounded-md border border-white/[0.06] bg-[#202228] px-3 py-2.5 text-[10px] leading-relaxed text-white outline-none placeholder:text-white/20 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/10"
                />

              </div>



              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#6366F1] text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:bg-[#5B5FEF] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
              >

                <Send className="h-4 w-4" />

                {contactPageData.form.submitButton}

              </button>

            </form>

          </div>

        </div>

      </section>



      {/* ================= FAQ ================= */}

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-8">


        {/* Header */}

        <div className="text-center">

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">

            {contactPageData.faq.title}

          </h2>


          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-foreground/45">

            {contactPageData.faq.description}

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