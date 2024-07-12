interface ExpertCardProps {
  name: string;
  expertise: string;
  rating: number;
  price: number;
  url: string;
  profilePictureUrl: string;
}

interface ExpertCardListProps {
  expertCards: ExpertCardProps[];
}

interface ExpertHistoryCardProps {
  name: string;
  expertise: string;
  consultDate: Date;
  status: boolean;
  url: string;
  profilePictureUrl: string;
}

interface ExpertHistoryCardListProps {
  expertHistoryCards: ExpertHistoryCardProps[];
}
