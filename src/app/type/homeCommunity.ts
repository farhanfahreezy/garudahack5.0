import { Category } from "../enum/category";
import { Tag } from "../enum/tag";
import { User } from "../enum/user";

export interface HomeCardCommunityProps {
  name: string;
  profilePictureUrl: string;
  postImageUrl?: string;
  title: string;
  url: string;
  totalUpvote: number;
  createdDate: Date;
  isAnsweredByExpert: boolean;
  comments: number;
  user_type: User;
  category: Category;
  tag: Tag[];
}

export interface HomeCardCommunityListProps {
  homeCardsCommunity: HomeCardCommunityProps[];
}
