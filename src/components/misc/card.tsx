import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import MeImage from "@/assets/images/me.webp";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Card({ type }: { type: "hero" | "error" }) {
  return (
    <section className="card-area">
      <div className="header">
        <Avatar className="profile">
          <AvatarImage src={MeImage} alt="bibril" />
          <AvatarFallback>BI</AvatarFallback>
        </Avatar>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Download resume"
              asChild>
              <a href="/pdf/badreddine-ibril-resume.pdf" download>
                <Download />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Download resume</TooltipContent>
        </Tooltip>
      </div>
      <div className="content">
        <h3 className="heading">
          {type === "hero" ? "Badreddine Ibril" : "404"}
        </h3>
        <p className="description">
          {type === "hero" ? (
            <>
              I build scalable frontend systems for large e-commerce platforms
              and create open-source tools that help developers build better
              experiences. <small>Frontend Software Engineer</small>
            </>
          ) : (
            "Only one page here, nothing more to see."
          )}
        </p>
        <ul className="links">
          {type === "hero" ? (
            <>
              <li className="link">
                <a href="mailto: badreddineibril@gmail.com" target="_blank">
                  badreddineibril@gmail.com
                </a>
              </li>
              <li className="link">
                <a href="tel:+212630195980" target="_blank">
                  (+212) 630-195980
                </a>
              </li>
            </>
          ) : (
            <li className="link">
              <Button variant="link" asChild>
                <Link
                  to="/"
                  style={{ padding: 0, height: "auto", width: "fit-content" }}>
                  <ArrowLeft /> Back to home
                </Link>
              </Button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
