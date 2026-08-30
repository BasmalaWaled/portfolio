import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "basmlawaled1@gmail.com",
    href: "mailto:hello@basmala.dev",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+20 10 6633 0500",
    href: "tel:+201066330500",
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
    value: "Open to new opportunities",
    href: "#",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    label: "GH",
    href: "#",
  },
  {
    name: "LinkedIn",
    label: "in",
    href: "#",
  },
  {
    name: "X",
    label: "X",
    href: "#",
  },
  {
    name: "Instagram",
    label: "IG",
    href: "#",
  },
];

export const faqs = [ { question: "What is your typical response time?", answer: "I usually respond within 24–48 business hours and make sure to give each message the attention it deserves.", }, { question: "What kind of projects do you work on?", answer: "I focus on building modern, responsive, and user-friendly web applications using React, Next.js, TypeScript, and other modern frontend technologies.", }, { question: "Can we schedule a call?", answer: "Absolutely. Once you send me a message, we can arrange a convenient time to discuss your project or opportunity in more detail.", }, { question: "Are you open to work opportunities?", answer: "Yes! I am currently open to internships, freelance projects, and frontend development opportunities.", }, ];
export const contactPageData = { header: { title: "Contact", highlight: "Me", description: "Have a project, internship, or opportunity in mind? Let's connect and work together.", },
form: { name: { label: "Your Name", placeholder: "What's your name?", },
email: {
  label: "Your Email",
  placeholder: "your@email.com",
},

subject: {
  label: "Subject",
  placeholder: "Project Inquiry / Job Opportunity",
},

message: {
  label: "Your Message",
  placeholder:
    "Tell me about your project, opportunity, or how we can work together...",
},

submitButton: "Send Message",
successMessage: "Message sent successfully!",
},
connect: { title: "Let's Connect", },
faq: { title: "Common Questions", description: "Everything you need to know about working with me and starting a conversation.", 
  }, };