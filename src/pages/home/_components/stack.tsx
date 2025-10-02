import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { StackDefinition } from "@/types/stack";

export default function Stack({
  category,
  description,
  technologies,
}: StackDefinition) {
  return (
    <li className="work-item">
      <span className="title">{category}</span>
      <div className="main-info">
        <span className="primary-info">{description}</span>
        <div className="secondary-info">
          {technologies.map((t, i) => {
            const Icon = t.icon;

            return (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <span className="icon">
                    <Icon />
                  </span>
                </TooltipTrigger>
                <TooltipContent>{t.name}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </li>
  );
}
