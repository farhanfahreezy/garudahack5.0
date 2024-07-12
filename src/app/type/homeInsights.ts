interface HomeCardInsightProps {
    title: string;
    imageUrl: string;
    url: string;
    author: string;
    createdDate: Date;
  }
  
  interface HomeCardInsightListProps {
    HomeCardsInsight: HomeCardInsightProps[];
  }
  