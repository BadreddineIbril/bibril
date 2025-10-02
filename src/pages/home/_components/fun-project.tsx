import type { FunProject } from "@/types/fun-project";

export default function FunProject({ name, url, description }: FunProject) {
  return (
    <li className="work-item">
      <span className="title">
        {name}{" "}
        <a href={url} target="_blank" className="link">
          [Preview]
        </a>
      </span>
      <div className="main-info">
        <p className="primary-info">{description}</p>
      </div>
    </li>
  );
}
