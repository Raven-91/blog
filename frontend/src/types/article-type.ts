import {CommentType} from "./comment.type";

export type ArticleType = {
  id: string,
  author: string,
  date: string,
  subject: {
    en: string,
    ru: string,
  },
  title: {
    en: string,
    ru: string,
  },
  description: {
    en: string,
    ru: string,
  },
  tags?: string[],
  content: {
    en: string,
    ru: string,
  },
  image: string,
  url: string,
  favorite?: boolean,
  rating?: number,
  readonly?: boolean,
  totalRate?: number,
  comments?: CommentType[],
  selected?: boolean,
  status?: {
    published: boolean,
    unpublished: boolean,
    draft: boolean,
  }
}






