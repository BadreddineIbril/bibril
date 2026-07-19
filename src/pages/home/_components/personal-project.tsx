import StarIcon from "@/assets/icons/star";
import type { PersonalProject } from "@/types/personal-project";
import { formatDate } from "@/util/helper";

export default function PersonalProject({
  name,
  url,
  description,
  launch,
}: PersonalProject) {
  return (
    <li className="item">
      <span className="title">
        {name}{" "}
        <a href={`https://${url}`} target="_blank" className="link">
          [{url.includes("netlify") ? "Preview" : url}]
        </a>
        {name.includes("shadcn") && <StarIcon />}
      </span>
      <div className="main-info">
        <p className="primary-info">{description}</p>
        <span className="secondary-info">{`${formatDate(launch)} - Live`}</span>
      </div>
    </li>
  );
}
