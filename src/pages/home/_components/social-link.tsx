import type { SocialLinkDefinition } from "@/types/social-link";

export default function SocialLink({ name, href, icon }: SocialLinkDefinition) {
  const Icon = icon;

  return (
    <li className="work-item">
      <a href={href} target="_blank" className="social-link">
        <Icon />
        {name}
      </a>
    </li>
  );
}
