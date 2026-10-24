export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: readonly string[];
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
};

export type SkillCategory =
  | "Systems & Infrastructure"
  | "Web Development"
  | "Network & Security"
  | "Virtualization";

export type SkillGroup = {
  category: SkillCategory;
  skills: readonly string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  capabilities: readonly string[];
};

export const projects = [
  {
    id: "infrastructure-automation",
    title: "Infrastructure Automation",
    description:
      "A repeatable infrastructure setup for deploying and maintaining Linux services with configuration managed as code.",
    techStack: ["Linux", "Ansible", "Docker", "Git"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: "virtualized-lab",
    title: "Virtualized Lab Environment",
    description:
      "A segmented virtual lab for running isolated workloads, testing network designs, and practicing service operations.",
    techStack: ["Proxmox VE", "KVM", "ZFS", "VLANs"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: "operations-dashboard",
    title: "Full-Stack Operations Dashboard",
    description:
      "A responsive web application that brings service status and operational data together in one interface.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
] as const satisfies readonly Project[];

export const skills = [
  {
    category: "Systems & Infrastructure",
    skills: ["Linux administration", "Infrastructure as code", "Docker", "CI/CD"],
  },
  {
    category: "Web Development",
    skills: ["TypeScript", "Next.js", "React", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Network & Security",
    skills: ["TCP/IP", "DNS", "VLANs", "Firewalls", "VPNs"],
  },
  {
    category: "Virtualization",
    skills: ["Proxmox VE", "KVM", "Virtual machines", "Storage planning"],
  },
] as const satisfies readonly SkillGroup[];

export const services = [
  {
    id: "systems-engineering",
    title: "Systems Engineering",
    description:
      "Design and improve dependable Linux infrastructure for applications and internal services.",
    capabilities: [
      "Infrastructure planning",
      "Linux deployment and administration",
      "Configuration automation",
      "Monitoring and reliability improvements",
    ],
  },
  {
    id: "virtualization",
    title: "Virtualization and Lab Design",
    description:
      "Build maintainable virtual environments for production workloads, development, and testing.",
    capabilities: [
      "Hypervisor setup",
      "Virtual machine and storage design",
      "Network segmentation",
      "Backup and recovery planning",
    ],
  },
  {
    id: "web-development",
    title: "Full-Stack Web Development",
    description:
      "Deliver accessible, responsive web experiences backed by practical application architecture.",
    capabilities: [
      "TypeScript and React applications",
      "Next.js websites and static exports",
      "API and data integration",
      "Deployment and performance tuning",
    ],
  },
] as const satisfies readonly Service[];