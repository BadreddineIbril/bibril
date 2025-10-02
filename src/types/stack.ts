import type { JSX } from "react";

export interface StackDefinition {
  category: string;
  description: string;
  technologies: { name: string; icon: () => JSX.Element }[];
}
