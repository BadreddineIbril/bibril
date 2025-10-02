export interface WorkDefinition {
  role: string;
  company: string;
  start: Date;
  end: Date;
  type: "on-site" | "hybrid" | "remote";
  content: string[];
}
