import { useEffect, useMemo, useState } from "react";
import ProjectGrid from "./components/portfolio/ProjectGrid";
import ProjectShell from "./components/portfolio/ProjectShell";
import { loadProjects } from "./lib/loadProjects";

function getSlugFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get("project");
}

function setSlugInUrl(slug: string | null) {
  const url = new URL(window.location.href);

  if (slug) {
    url.searchParams.set("project", slug);
  } else {
    url.searchParams.delete("project");
  }

  window.history.pushState({}, "", url);
}

export default function App() {
  const projects = useMemo(() => loadProjects(), []);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(() =>
    getSlugFromUrl()
  );

  const selectedProject =
    projects.find((project) => project.meta.slug === selectedSlug) ?? null;

  useEffect(() => {
    const onPopState = () => {
      setSelectedSlug(getSlugFromUrl());
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const openProject = (slug: string) => {
    setSelectedSlug(slug);
    setSlugInUrl(slug);
  };

  const closeProject = () => {
    setSelectedSlug(null);
    setSlugInUrl(null);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="flex flex-row">
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Portfolio
            </p>

            <h1 className="text-4xl font-bold tracking-tight">Jakob Fischer</h1>

            <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Hier finden Sie meine aktuellen und vergangenen Projekte.
            </p>
          </div>

          <div className="flex flex-2 items-start justify-end">
            <div className="flex flex-col items-end gap-3 text-sm">
              <a
                href="mailto:Jakob-Fischer@telekom.de"
                className="group flex flex-col items-end leading-tight transition-transform duration-400 ease-in-out hover:scale-105"
              >
                <span className="text-zinc-500 text-xs tracking-wide uppercase">
                  Email
                </span>
                <span className="text-right text-portfolio-accent-white dark:text-portfolio-accent">
                  Jakob-Fischer@telekom.de
                </span>
                <span className="absolute -bottom-[0px] left-0 w-0 transition-all duration-300 h-[1px] dark:bg-portfolio-accent bg-portfolio-accent-white group-hover:w-full" ></span>
              </a>

              <a
                href="https://www.linkedin.com/in/jakob-fischer-74b6a8330/"
                className="group flex flex-col items-end leading-tight transition-transform duration-400 ease-in-out hover:scale-105"
              >
                <span className="text-zinc-500 text-xs tracking-wide uppercase">
                  LinkedIn
                </span>
                <span className="text-right text-portfolio-accent-white dark:text-portfolio-accent">
                  Jakob Fischer
                </span>
                <span className="absolute -bottom-[0px] left-0 w-0 transition-all duration-300 h-[1px] dark:bg-portfolio-accent bg-portfolio-accent-white group-hover:w-full" ></span>
              </a>

              <a
                href="tel:+49123456789"
                className="group flex flex-col items-end leading-tight transition-transform duration-400 ease-in-out hover:scale-105"
              >
                <span className="text-zinc-500 text-xs tracking-wide uppercase">
                  Telefon
                </span>
                <span className="text-right text-portfolio-accent-white dark:text-portfolio-accent">
                  +49 123 456789
                </span>
                <span className="absolute -bottom-[0px] left-0 w-0 transition-all duration-300 h-[1px] dark:bg-portfolio-accent bg-portfolio-accent-white group-hover:w-full" ></span>
              </a>
            </div>
          </div>
        </header>

        {!selectedProject ? (
          <ProjectGrid projects={projects} onOpen={openProject} />
        ) : (
          <div className="space-y-6">
            <button
              onClick={closeProject}
              className="rounded-xl border border-zinc-300 px-4 py-2 text-sm transition-transform duration-200 hover:scale-105 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              ← Zurück zur Übersicht
            </button>

            <ProjectShell
              title={selectedProject.meta.title}
              shortDescription={selectedProject.meta.shortDescription}
              tags={selectedProject.meta.tags}
              markdown={selectedProject.markdown}
              timeFrameEnd={selectedProject.meta.timeFrame.end}
              timeFrameStart={selectedProject.meta.timeFrame.start}
            />
          </div>
        )}

        <div className="mt-16 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} Jakob Fischer. All rights reserved.
        </div>
      </div>
    </div>
  );
}