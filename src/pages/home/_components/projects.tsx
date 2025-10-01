import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Projects() {
  const PROJECTS = [
    {
      id: "shadcn-css",
      title: "shadcn/css",
      description: "CSS Modules port of shadcn/ui",
      img: "",
    },
    {
      id: "mui3",
      title: "Material UI 3",
      description:
        "Lightweight collection of accessible Material Design 3 components.",
      img: "",
    },
    {
      id: "codate",
      title: "Codate",
      description:
        "Easily create custom date formats in any programming language.",
      img: "",
    },
  ];

  return (
    <section className="projects-area">
      <h3 className="heading">Here's What I've Been Up To.</h3>
      <ul className="cards">
        {PROJECTS.map((p) => (
          <li key={p.id} className="card">
            <Avatar className="media">
              <AvatarImage
                src="https://pbs.twimg.com/media/G2F23EIXkAA5Sv1?format=png&name=medium"
                alt={p.title}
              />
              <AvatarFallback>{p.title}</AvatarFallback>
            </Avatar>
            <div className="content">
              <h4 className="title">{p.title}</h4>
              <p className="description">{p.description}</p>
              <Button variant="secondary" size="lg" className="action">
                View Project <ChevronRight />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
