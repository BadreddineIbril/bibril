import BunIcon from "@/assets/icons/bun";
import CssIcon from "@/assets/icons/css";
import GithubIcon from "@/assets/icons/github";
import JavascriptIcon from "@/assets/icons/javascript";
import LaravelIcon from "@/assets/icons/laravel";
import LinkedInIcon from "@/assets/icons/linkedin";
import LiquidIcon from "@/assets/icons/liquid";
import MailIcon from "@/assets/icons/mail";
import PnpmIcon from "@/assets/icons/pnpm";
import ReactIcon from "@/assets/icons/react";
import TypescriptIcon from "@/assets/icons/typescript";
import ViteIcon from "@/assets/icons/vite";
import VueIcon from "@/assets/icons/vue";
import XIcon from "@/assets/icons/x";
import type { EducationDefinition } from "@/types/education";
import type { FunProject } from "@/types/fun-project";
import type { PersonalProject } from "@/types/personal-project";
import type { SocialLinkDefinition } from "@/types/social-link";
import type { StackDefinition } from "@/types/stack";
import type { WorkDefinition } from "@/types/work";

const WORK_TYPES = {
  "on-site": "On site",
  hybrid: "Hybrid",
  remote: "Remote",
};

const EXPERIENCES: WorkDefinition[] = [
  {
    role: "Frontend Engineer",
    company: "YouCan",
    start: new Date("10-16-2023"),
    end: new Date(),
    type: "hybrid",
    content: [
      "Building themes and every piece connected to their flow + helping both makers and users.",
      "Building a new design system (shadcn way).",
      "Laying the foundations of our storefront for next-gen frontend team.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Hi Group",
    start: new Date("04-01-2023"),
    end: new Date("10-01-2023"),
    type: "remote",
    content: [
      "Converting the client's (Huawei) ideas into a practical architectural framework.",
      "Built the complete app (ETL SaaS) from front to back, integrated the interfaces, mapped out flows and logic, and added AI where it made tasks simpler.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Alliance Ever",
    start: new Date("02-01-2023"),
    end: new Date("05-01-2023"),
    type: "hybrid",
    content: [
      "Transformed the project from a CMS into a fully hand-coded solution.",
      "Made major UX updates throughout the project to make it easier for users to navigate and interact.",
    ],
  },
];

const EDUCATION: EducationDefinition[] = [
  {
    school: "Superior School of Technology - Kenitra",
    degree: "Bachelor's Degree in Computer Engineering",
    start: new Date("09-01-2024"),
    end: new Date("07-01-2025"),
  },
  {
    school: "ISTA - Roches Noires",
    degree: "Diploma of Specialized Technician in Digital Development",
    start: new Date("09-01-2021"),
    end: new Date("07-01-2023"),
  },
];

const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    name: "shadcn/css",
    url: "shadcn-css.com",
    description: "CSS Modules port of shadcn/ui",
    launch: new Date("05-01-2024"),
  },
  {
    name: "Material UI 3",
    url: "mui3.com",
    description:
      "Lightweight collection of accessible Material Design 3 components",
    launch: new Date("07-01-2025"),
  },
  {
    name: "Codate",
    url: "codate.io",
    description: "Create custom date formats in any language",
    launch: new Date("10-01-2025"),
  },
];

const FUN_PROJECTS: FunProject[] = [
  {
    name: "YouCan Wrapped",
    url: "https://youcan-wrapped.netlify.app",
    description: "Shopify Wrapped (YouCan version)",
  },
  {
    name: "Team Objectives",
    url: "https://themes-objectives.netlify.app",
    description: "Showcase annual team objectives",
  },
  {
    name: "L9aleb Editor (Theme editor)",
    url: "https://l9aleb-editor.netlify.app",
    description: "Interactive prototype of project revamp (v2)",
  },
];

const STACK: StackDefinition[] = [
  {
    category: "9 to 5",
    description: "What I ship with at work:",
    technologies: [
      { name: "Vue", icon: VueIcon },
      { name: "Typescript", icon: TypescriptIcon },
      { name: "Liquid", icon: LiquidIcon },
      { name: "Javascript", icon: JavascriptIcon },
      { name: "Css", icon: CssIcon },
      { name: "Laravel", icon: LaravelIcon },
      { name: "Pnpm", icon: PnpmIcon },
    ],
  },
  {
    category: "What I Use",
    description: "The stack I experiment with:",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "Typescript", icon: TypescriptIcon },
      { name: "Css", icon: CssIcon },
      { name: "Vite", icon: ViteIcon },
      { name: "Bun", icon: BunIcon },
    ],
  },
];

const SOCIAL_LINKS: SocialLinkDefinition[] = [
  { name: "Github", href: "", icon: GithubIcon },
  { name: "LinkedIn", href: "", icon: LinkedInIcon },
  { name: "X", href: "", icon: XIcon },
  { name: "Email", href: "", icon: MailIcon },
];

export {
  WORK_TYPES,
  EXPERIENCES,
  EDUCATION,
  PERSONAL_PROJECTS,
  FUN_PROJECTS,
  STACK,
  SOCIAL_LINKS,
};
