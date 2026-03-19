import type { ProjectMeta } from "../../types/portfolio.ts";

export const meta: ProjectMeta = {
  previewImage: "/projectsWebp/homelab/homelab.webp",
  slug: "jf-homelab",
  title: "jf-homelab.de",
  shortDescription:
    "Selbst aufgebautes Homelab zur Virtualisierung, Container-Orchestrierung und zum sicheren Betrieb eigener Dienste wie Home Assistant, Obsidian-Sync, Reverse Proxy und lokaler LLM-Inferenz.",
  tags: [
    "Homelab",
    "Proxmox",
    "Kubernetes",
    "Docker",
    "Self-Hosting",
    "Tailscale",
    "Nginx",
    "LLM",
  ],
  timeFrame: {
    start: "08.2025",
    end: "Jetzt",
  },
  featured: true,
  order: 3,
};
