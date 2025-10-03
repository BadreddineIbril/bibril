import type { WorkDefinition } from "@/types/work";
import { EMPLOYMENT_TYPES, LOCATION_TYPES } from "@/util/constants";
import { formatDate } from "@/util/helper";

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
          <li key={i}>{c}</li>
        ))}
      </ul>
    </li>
  );
}
