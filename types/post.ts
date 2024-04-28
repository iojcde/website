import { OstDocument } from "outstatic";

export type Post = {
  tags: string[];
} & OstDocument;

export interface Params {
  params: {
    slug: string;
  };
}
