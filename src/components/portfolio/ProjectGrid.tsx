import type { PortfolioProject } from "../../types/portfolio";
import ProjectCard from "./ProjectCard";

type Props = {
    projects: PortfolioProject[];
    onOpen: (slug: string) => void;
};

export default function ProjectGrid({ projects, onOpen }: Props) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard
                    key={project.meta.slug}
                    meta={project.meta}
                    onOpen={onOpen}
                />
            ))}
        </div>
    );
}