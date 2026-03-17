import ReactMarkdown from "react-markdown";

type Props = {
  title: string;
  shortDescription: string;
  tags: string[];
  markdown: string;
  timeFrameStart: string;
  timeFrameEnd: string;
};

export default function ProjectShell({
  title,
  shortDescription,
  tags,
  markdown,
  timeFrameStart,
  timeFrameEnd,
}: Props) {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <div className="flex items-end gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h2>
          <p className="text-sm text-right leading-6 text-zinc-500 dark:text-zinc-500">{`${timeFrameStart} bis ${timeFrameEnd}`}</p>
        </div>
        <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
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
      </header>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <article
          className="
                         prose prose-zinc max-w-none dark:prose-invert

                         prose-headings:font-semibold
                         prose-headings:tracking-tight

                         prose-h2:border-b
                         prose-h2:pb-2
                         prose-h2:mt-6
                         prose-h2:mb-4

                         prose-h3:mt-6
                         prose-h3:mb-1

                         prose-p:my-3
                         prose-p:mt-1
                         prose-ul:my-3
                         prose-ul:mt-1
                         prose-li:my-1
                  "
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
}
