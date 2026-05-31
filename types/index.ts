export interface Project {
  title: string;
  desc: string;
  tech: string[];
  link?: string;
  status?: "ACTIVE" | "ARCHIVED" | "CLASSIFIED";
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: "ACTIVE_MISSION" | "COMPLETED" | "CLASSIFIED";
  desc: string;
  tags: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  status: "VERIFIED" | "CLASSIFIED";
  color: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface MousePosition {
  x: number;
  y: number;
}
