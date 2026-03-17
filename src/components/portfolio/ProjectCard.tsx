import type { ProjectMeta } from "../../types/portfolio";

type Props = {
  meta: ProjectMeta;
  onOpen: (slug: string) => void;
};

export default function ProjectCard({ meta, onOpen }: Props) {
  return (
    <button
      onClick={() => onOpen(meta.slug)}
      className="group w-full rounded-2xl overflow-hidden border border-zinc-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer"
    >
      {/*image*/}

      <div className="overflow-hidden">
        <img
          alt="Preview Image"
          src={meta.previewImage}
          className="w-full h-48 object-cover object-top-left transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {meta.title}
          </h3>
        </div>

        <p className="mb-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {meta.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="
                      rounded-full
                      border

                      px-2.5 py-1
                      text-xs
                        bg-portfolio-accent-white/15
                        border-portfolio-accent-white/40
                      text-portfolio-accent-white


                      dark:bg-portfolio-accent/15
                      dark:border-portfolio-accent/40
                       dark:text-portfolio-accent
                      transition-all duration-200
                    "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
