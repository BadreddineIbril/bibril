import "./styles.css";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import Hero from "./_components/hero";
import Section from "./_components/section";
import Work from "./_components/work";
import Education from "./_components/education";
import PersonalProject from "./_components/personal-project";
import FunProject from "./_components/fun-project";
import Stack from "./_components/stack";
import SocialLink from "./_components/social-link";
import {
  EDUCATION,
  EXPERIENCES,
  FUN_PROJECTS,
  PERSONAL_PROJECTS,
  SOCIAL_LINKS,
  STACK,
} from "@/util/constants";
import { scrollToTop } from "@/util/helper";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main data-page="home">
      <Hero />
      <section className="actions-area">
        <button
          className="action toggle"
          data-state={isOpen ? "open" : "closed"}
          onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? "Read my Resume" : "Collapse"}
          <ArrowDown />
        </button>
      </section>
      <section
        className="sections-area"
        data-state={isOpen ? "open" : "closed"}>
        <div className="area-wrapper">
          <Section title="Experience">
            <ul className="items" data-section="experience">
              {EXPERIENCES.map((ex, i) => (
                <Work key={i} {...ex} />
              ))}
            </ul>
          </Section>
          <Section title="Education">
            <ul className="items" data-section="education">
              {EDUCATION.map((ed, i) => (
                <Education key={i} {...ed} />
              ))}
            </ul>
          </Section>
          <Section title="Personal Projects">
            <ul className="items" data-section="personal-projects">
              {PERSONAL_PROJECTS.map((pp, i) => (
                <PersonalProject key={i} {...pp} />
              ))}
            </ul>
          </Section>
          <Section title="Fun Projects">
            <ul className="items" data-section="fun-projects">
              {FUN_PROJECTS.map((fp, i) => (
                <FunProject key={i} {...fp} />
              ))}
            </ul>
          </Section>
          <Section title="Stack">
            <ul className="items" data-section="stack">
              {STACK.map((st, i) => (
                <Stack key={i} {...st} />
              ))}
            </ul>
          </Section>
          <Section title="Social Links">
            <ul className="items" data-section="social-links">
              {SOCIAL_LINKS.map((sl, i) => (
                <SocialLink key={i} {...sl} />
              ))}
            </ul>
          </Section>
          <section className="actions-area">
            <button className="action back-to-top" onClick={scrollToTop}>
              Back to top
              <ArrowUp />
            </button>
          </section>
        </div>
      </section>
    </main>
  );
}
