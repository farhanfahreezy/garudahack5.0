interface HomeCardCommunityProps {
    name: string;
    profilePictureUrl: string;
    url: string;
    totalUpvote: number;
    createdDate: Date;
    isAnsweredByExpert: boolean;
    comments: number;
    user_type: User;
    category: Category;
    tag: Tag[];
  }
  
  interface HomeCardCommunityListProps {
    HomeCardsCommunity: HomeCardCommunityProps[];
  }
  