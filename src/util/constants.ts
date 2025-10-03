import BunIcon from "@/assets/icons/bun";
import CssIcon from "@/assets/icons/css";
import DockerIcon from "@/assets/icons/docker";
import GithubIcon from "@/assets/icons/github";
import JavascriptIcon from "@/assets/icons/javascript";
import LaravelIcon from "@/assets/icons/laravel";
import LinkedInIcon from "@/assets/icons/linkedin";
import LiquidIcon from "@/assets/icons/liquid";
import MailIcon from "@/assets/icons/mail";
import NodeJsIcon from "@/assets/icons/node-js";
import PnpmIcon from "@/assets/icons/pnpm";
import ReactIcon from "@/assets/icons/react";
import SassIcon from "@/assets/icons/sass";
import TypescriptIcon from "@/assets/icons/typescript";
import ViteIcon from "@/assets/icons/vite";
import VueIcon from "@/assets/icons/vue";
import XIcon from "@/assets/icons/x";
import type { EducationDefinition } from "@/types/education";
import type { FunProjectDefinition } from "@/types/fun-project";
import type { PersonalProject } from "@/types/personal-project";
import type { SocialLinkDefinition } from "@/types/social-link";
import type { StackDefinition } from "@/types/stack";
import type { WorkDefinition } from "@/types/work";

const LOCATION_TYPES = {
  "on-site": "On site",
  hybrid: "Hybrid",
  remote: "Remote",
};

const EMPLOYMENT_TYPES = {
  "full-time": "Full-time",
  freelance: "Freelance",
  internship: "Internship",
};

const EXPERIENCES: WorkDefinition[] = [
  {
    role: "Frontend Engineer",
    company: {
      name: "YouCan",
      website: "https://youcan.shop",
    },
    start: new Date("2023-10-16T00:00:00Z"),
    end: new Date(),
    location_type: "hybrid",
    employment_type: "full-time",
    content: [
      "Building themes and every piece connected to their flow + helping both makers and users.",
      "Building a new design system (shadcn way).",
      "Laying the foundations of our storefront for next-gen frontend team.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: {
      name: "Hi Group",
      website: "http://hi-group.fr",
    },
    start: new Date("2023-04-01T00:00:00Z"),
    end: new Date("2023-10-01T00:00:00Z"),
    location_type: "remote",
    employment_type: "freelance",
    content: [
      "Converting the client's (Huawei) ideas into a practical architectural framework.",
      "Built the complete app (ETL SaaS) from front to back, integrated the interfaces, mapped out flows and logic, and added AI where it made tasks simpler.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: {
      name: "Alliance Ever",
      website: "https://allianceever.com",
    },
    start: new Date("2023-02-01T00:00:00Z"),
    end: new Date("2023-05-01T00:00:00Z"),
    location_type: "hybrid",
    employment_type: "internship",
    content: [
      "Transformed the project from a CMS into a fully hand-coded solution.",
      "Made major UX updates throughout the project to make it easier for users to navigate and interact.",
    ],
  },
];

const EDUCATION: EducationDefinition[] = [
  {
    school: {
      name: "Superior School of Technology",
      location: "Kenitra",
    },
    degree: "Bachelor's Degree in Computer Engineering",
    start: new Date("2024-09-01T00:00:00Z"),
    end: new Date("2025-07-01T00:00:00Z"),
  },
  {
    school: {
      name: "ISTA",
      location: "Roches Noires",
    },
    degree: "Diploma of Specialized Technician in Digital Development",
    start: new Date("2021-09-01T00:00:00Z"),
    end: new Date("2023-07-01T00:00:00Z"),
  },
];

const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    name: "shadcn/css",
    url: "shadcn-css.com",
    description: "CSS Modules port of shadcn/ui.",
    launch: new Date("2025-09-01T00:00:00Z"),
  },
  {
    name: "Material UI 3",
    url: "mui3.com",
    description:
      "Lightweight collection of accessible Material Design 3 components.",
    launch: new Date("2025-07-01T00:00:00Z"),
  },
  {
    name: "Codate",
    url: "codate.io",
    description: "Create custom date formats in any language.",
    launch: new Date("2024-05-01T00:00:00Z"),
  },
];

const FUN_PROJECTS: FunProjectDefinition[] = [
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
      { name: "Sass", icon: SassIcon },
      { name: "Laravel", icon: LaravelIcon },
      { name: "Docker", icon: DockerIcon },
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
      { name: "Node Js", icon: NodeJsIcon },
      { name: "Vite", icon: ViteIcon },
      { name: "Bun", icon: BunIcon },
    ],
  },
];

const SOCIAL_LINKS: SocialLinkDefinition[] = [
  {
    name: "Github",
    href: "https://github.com/BadreddineIbril",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/badreddine-ibril",
    icon: LinkedInIcon,
  },
  { name: "X", href: "https://x.com/badr_ibril", icon: XIcon },
  { name: "Email", href: "mailto: badreddineibril@gmail.com", icon: MailIcon },
];

export {
  LOCATION_TYPES,
  EMPLOYMENT_TYPES,
  EXPERIENCES,
  EDUCATION,
  PERSONAL_PROJECTS,
  FUN_PROJECTS,
  STACK,
  SOCIAL_LINKS,
};
