import Button from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { File, Github, Home, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const NAVIGATION_LINKS = [
    { label: "Home", value: "/", icon: <Home /> },
    { label: "Github", value: "/", icon: <Github /> },
    { label: "X", value: "/", icon: <Twitter /> },
    { label: "CV", value: "/", icon: <File /> },
  ];

  return (
    <header data-layout="header">
      <ul className="links">
        {NAVIGATION_LINKS.map((l, i) => (
          <li key={i} className="link">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="lg" aria-label={l.label} asChild>
                  <Link to={l.value}>{l.icon}</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">{l.label}</TooltipContent>
            </Tooltip>
            {i === 0 && <Separator orientation="vertical" />}
          </li>
        ))}
        <li className="link">
          <Button size="lg">Work with Me</Button>
        </li>
      </ul>
    </header>
  );
}
