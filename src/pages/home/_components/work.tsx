import type { WorkDefinition } from "@/types/work";
import { WORK_TYPES } from "@/util/constants";
import { formatDate } from "@/util/helper";

export default function Work({
  role,
  company,
  start,
  end,
  type,
  content,
}: WorkDefinition) {
  return (
    <li className="work-item">
      <span className="title">
        {role}{" "}
        <a href="#" target="_blank" className="link">
          [{company}]
        </a>
      </span>
      <div className="main-info">
        <p className="primary-info">
          {`${formatDate(start)} - ${formatDate(end)}`}
        </p>
        <span className="secondary-info">{WORK_TYPES[type]}</span>
      </div>
      <ul className="core-info">
        {content.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </li>
  );
}
