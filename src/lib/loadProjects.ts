import type { PortfolioProject, ProjectMeta } from "../types/portfolio";

const metaModules = import.meta.glob("../portfolio-projects/*/meta.ts", {
    eager: true,
}) as Record<string, { meta: ProjectMeta }>;

const markdownModules = import.meta.glob("../portfolio-projects/*/content.md", {
    eager: true,
    query: "?raw",
    import: "default",
}) as Record<string, string>;

function extractProjectFolder(path: string): string {
    const match = path.match(/portfolio-projects\/([^/]+)\//);
    return match?.[1] ?? "";
}

export function loadProjects(): PortfolioProject[] {
    const projects: PortfolioProject[] = [];

    for (const metaPath in metaModules) {
        const folder = extractProjectFolder(metaPath);
        const markdownPath = `../portfolio-projects/${folder}/content.md`;

        const metaModule = metaModules[metaPath];
        const markdown = markdownModules[markdownPath];

        if (!metaModule || !markdown) continue;

        projects.push({
            meta: metaModule.meta,
            markdown,
        });
    }

    return projects.sort((a, b) => {
        const aOrder = a.meta.order ?? 999;
        const bOrder = b.meta.order ?? 999;
        return aOrder - bOrder;
    });
}