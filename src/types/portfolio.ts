
export type ProjectMeta = {
  previewImage: string,
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  timeFrame: {
    start: string;
    end: string;
  }
  featured?: boolean;
  order?: number;
};

export type PortfolioProject = {
  meta: ProjectMeta;
  markdown: string;
};