export interface WorkDefinition {
  role: string;
  company: {
    name: string;
    website: string;
  };
  start: Date;
  end: Date;
  employment_type: "full-time" | "freelance" | "internship";
  location_type: "on-site" | "hybrid" | "remote";
  content: string[];
}
