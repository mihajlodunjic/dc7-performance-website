export type CaseStudy = {
  slug: string;
  published: boolean;
  athleteDisplayName: string;
  namePermission: boolean;
  sport: string;
  ageGroup: string;
  period: string;
  goal: string;
  startingPoint: string;
  process: string;
  metricsBefore: string[];
  metricsAfter: string[];
  quote?: string;
  quotePermission: boolean;
  images: string[];
  imagePermission: boolean;
  verifiedAt?: string;
};

export const caseStudies: CaseStudy[] = [];

export const publishedCaseStudies = caseStudies.filter((study) => {
  return study.published && study.namePermission && study.imagePermission && Boolean(study.verifiedAt);
});
