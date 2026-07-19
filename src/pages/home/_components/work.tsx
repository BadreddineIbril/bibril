import type { WorkDefinition } from "@/types/work";
import { EMPLOYMENT_TYPES, LOCATION_TYPES } from "@/util/constants";
import { formatDate } from "@/util/helper";
import { ExternalLink } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

function formatContent(text: string): React.ReactNode {
  return text.split(/(\{\{.*?\}\})/).map((part, index) => {
    const match = part.match(/\{\{(.*?)\}\}/);

    if (match) {
      const url = match[1];

      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            verticalAlign: "middle",
            color: "var(--color-muted-foreground)",
          }}>
          <ExternalLink size={14} />
        </a>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

export default function Work({
  role,
  company,
  start,
  end,
  employment_type,
  location_type,
  content,
}: WorkDefinition) {
  return (
    <li className="item">
      <div className="title">
        <div className="detail">
          <span>{role} </span>
          <a href={company.website} target="_blank" className="link">
            [{company.name}]
          </a>
        </div>
      </div>
      <div className="main-info">
        <p className="primary-info">
          {`${formatDate(start)} - ${formatDate(end)} `}
          <small>{EMPLOYMENT_TYPES[employment_type]}</small>
        </p>
        <span className="secondary-info">{LOCATION_TYPES[location_type]}</span>
      </div>
      <ul className="core-info">
        {content.map((c, i) => (
          <li key={i}>{formatContent(c)}</li>
        ))}
      </ul>
    </li>
  );
}
