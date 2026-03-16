import { useMemo, useState } from "react";
import ProjectGrid from "./components/portfolio/ProjectGrid";
import ProjectShell from "./components/portfolio/ProjectShell";
import { loadProjects } from "./lib/loadProjects";

export default function App() {
    const projects = useMemo(() => loadProjects(), []);
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

    const selectedProject =
        projects.find((project) => project.meta.slug === selectedSlug) ?? null;

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <header className="mb-10 space-y-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                        Portfolio
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight">Jakob Fischer</h1>

                    <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                        Eine Sammlung vereinfachter Projekt-Demos und Projektbeschreibungen.
                    </p>
                </header>

                {!selectedProject ? (
                    <ProjectGrid projects={projects} onOpen={setSelectedSlug} />
                ) : (
                    <div className="space-y-6">
                        <button
                            onClick={() => setSelectedSlug(null)}
                            className="rounded-xl border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
                        >
                            ← Back to projects
                        </button>

                        <ProjectShell
                            title={selectedProject.meta.title}
                            shortDescription={selectedProject.meta.shortDescription}
                            tags={selectedProject.meta.tags}
                            markdown={selectedProject.markdown}
                        />
                    </div>
                )}

                {/* Footer */}
                <div className="mt-16 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
                    © {new Date().getFullYear()} Jakob Fischer. All rights reserved.
                </div>

            </div>
        </div>
    );
}