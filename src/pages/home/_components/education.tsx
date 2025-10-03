import type { EducationDefinition } from "@/types/education";
import { formatDate } from "@/util/helper";

export default function Education({
  school,
  degree,
  start,
  end,
}: EducationDefinition) {
  return (
    <li className="item">
      <span className="title">
        {school.name} <span className="link">[{school.location}]</span>
      </span>
      <div className="main-info">
        <p className="primary-info">{degree}</p>
        <span className="secondary-info">
          {`${formatDate(start, false)} - ${formatDate(end, false)}`}
        </span>
      </div>
    </li>
  );
}
