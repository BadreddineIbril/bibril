import type { JSX } from "react";

export interface SocialLinkDefinition {
  name: string;
  href: string;
  icon: () => JSX.Element;
}
