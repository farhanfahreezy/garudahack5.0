import { User } from "../enum/user";

export interface ResponseAIProps {
  content: string;
  totalUpvote: number;
  createdDate: Date;
}

export interface ResponseCommunityProps {
  name: string;
  profilePictureUrl: string;
  content: string;
  totalUpvote: number;
  createdDate: Date;
  comments: number;
  user_type: User;
}
