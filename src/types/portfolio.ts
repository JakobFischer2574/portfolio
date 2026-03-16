export type ProjectMeta = {
    previewImage: string,
    slug: string;
    title: string;
    shortDescription: string;
    tags: string[];
    featured?: boolean;
    order?: number;
};

export type PortfolioProject = {
    meta: ProjectMeta;
    markdown: string;
};