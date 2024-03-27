import {ArticleType} from "./article-type";

export type UserProjectData = {
  id: string,
  subject: {
    en: string,
    ru: string,
  },
  url: string,
  articles: ArticleType[],
  selected?: boolean
}
