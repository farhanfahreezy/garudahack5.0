import { Tag } from "../enum/tag";

export interface HomeCardInsightProps {
  title: string;
  imageUrl: string;
  url: string;
  author: string;
  createdDate: Date;
  tags: Tag[];
}

export interface HomeCardInsightListProps {
  homeCardsInsight: HomeCardInsightProps[];
}
