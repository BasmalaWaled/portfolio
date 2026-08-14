import { Link } from "react-router-dom";
import { MessageCircleMore } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
        <MessageCircleMore className="h-6 w-6" />
      </span>
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-foreground/60">
        {description ??
          "This page is coming soon. Keep chatting with the assistant to describe what you'd like here and it will be built out."}
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
      >
        Back to Home
      </Link>
    </div>
  );
}