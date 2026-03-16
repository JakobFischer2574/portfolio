import ReactMarkdown from "react-markdown";

type Props = {
    title: string;
    shortDescription: string;
    tags: string[];
    markdown: string;
};

export default function ProjectShell({
                                         title,
                                         shortDescription,
                                         tags,
                                         markdown,
                                     }: Props) {
    return (
        <section className="space-y-6">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {title}
                </h2>

                <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    {shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
              {tag}
            </span>
                    ))}
                </div>
            </header>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <article className="prose prose-zinc max-w-none dark:prose-invert">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </article>
            </div>
        </section>
    );
}