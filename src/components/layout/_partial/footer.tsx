import Button from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const SOCIAL_LINKS = [
    { label: "Github", value: "#", icon: <Github /> },
    { label: "X", value: "#", icon: <Twitter /> },
    { label: "LinkedIn", value: "#", icon: <Linkedin /> },
    { label: "Email", value: "#", icon: <Mail /> },
  ];

  return (
    <footer data-layout="footer">
      <span className="copyright">
        Copyright © {new Date().getFullYear()} Badreddine Ibril. All rights
        reserved.
      </span>
      <ul className="social-links">
        {SOCIAL_LINKS.map((s, i) => (
          <Button
            key={i}
            variant="ghost"
            size="sm"
            aria-label={s.label}
            asChild>
            <a href={s.value} className="link">
              {s.icon}
            </a>
          </Button>
        ))}
      </ul>
    </footer>
  );
}
