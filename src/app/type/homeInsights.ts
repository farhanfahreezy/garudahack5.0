export interface HomeCardInsightProps {
  title: string;
  imageUrl: string;
  url: string;
  author: string;
  createdDate: Date;
}

export interface HomeCardInsightListProps {
  homeCardsInsight: HomeCardInsightProps[];
}
