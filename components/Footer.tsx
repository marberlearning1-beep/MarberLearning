import Link from "next/link";
import Image from "next/image";

// Editable content
const TAGLINE = "Personalized K-12 tutoring that builds confidence and skills.";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Tutoring Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const SUBJECTS = ["Math", "Science", "English", "History", "Languages", "Test Prep"];

const CONTACT_INFO = [
  { icon: "✉️", text: "mcortes@marberlearnig.org" },
  { icon: "📞", text: "(555) 123-4567" },
  { icon: "📍", text: "Serving Houston, TX" },
];

const COPYRIGHT = "© 2025 Marber Learning. All rights reserved.";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-text-dark text-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Marber Learning logo"
                  fill
                  sizes="40px"
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="font-heading font-bold text-lg text-bg-cream">
                Marber Learning
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">{TAGLINE}</p>
            <div className="flex gap-4 mt-1">
              <a
                href="#"
                className="text-text-muted hover:text-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50 rounded"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50 rounded"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50 rounded"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-bg-cream text-base mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted hover:text-primary-light text-sm transition-colors duration-200 focus:outline-none focus:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-heading font-bold text-bg-cream text-base mb-5">
              Subjects
            </h3>
            <ul className="flex flex-col gap-3">
              {SUBJECTS.map((subject) => (
                <li key={subject}>
                  <span className="text-text-muted text-sm">{subject}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-bg-cream text-base mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              {CONTACT_INFO.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-text-muted text-sm">
                  <span aria-hidden="true">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-text-muted text-sm">{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}
