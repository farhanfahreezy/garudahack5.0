interface ExpertCardProps {
  name: string;
  expertise: string;
  rating: number;
  price: number;
  url: string;
  profilePictureUrl: string;
}

interface ExperCardListProps {
  expertCards: ExpertCardProps[];
}
