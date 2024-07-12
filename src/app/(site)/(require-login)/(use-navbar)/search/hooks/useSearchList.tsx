import { Category } from "@/app/enum/category";
import { Tag } from "@/app/enum/tag";
import { User } from "@/app/enum/user";
import {
  HomeCardCommunityListProps,
  HomeCardCommunityProps,
} from "@/app/type/homeCommunity";

export default function useSearchList() {
  const currentDate = new Date();

  const dataSearch1: HomeCardCommunityProps = {
    name: "Dr. H. Pak Vincent",
    profilePictureUrl: "/home_community/pakVincent.png",
    title: "5 Parenting Trends That Will Be Huge in 2024",
    postImageUrl: "/home_community/post/post4.png",
    url: "home/community/1",
    totalUpvote: 212111,
    createdDate: new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000),
    isAnsweredByExpert: false,
    comments: 69,
    user_type: User.ParentingExpert,
    category: Category.Discussion,
    tag: [
      Tag.BehaviorManag,
      Tag.NutritionAndHealth,
      Tag.MentalHealth,
      Tag.NewbornCare,
    ],
  };

  const dataSearch2: HomeCardCommunityProps = {
    name: "Dr. Ferdinant Sinaga",
    profilePictureUrl: "/expert/sinaga.png",
    title: "The Consistency Trend in Parenting: Why It Matters",
    postImageUrl: "/home_community/post/post5.png",
    url: "home/community/1",
    totalUpvote: 41242123,
    createdDate: new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000),
    isAnsweredByExpert: true,
    comments: 5504,
    user_type: User.ParentingExpert,
    category: Category.Sharing,
    tag: [Tag.NewbornCare],
  };

  const dataSearch3: HomeCardCommunityProps = {
    name: "Dr. Ferdinant Sinaga",
    profilePictureUrl: "/expert/sinaga.png",
    title: "The Shift to New Age Parenting in 2024",
    postImageUrl: "/home_community/post/post6.png",
    url: "home/community/1",
    totalUpvote: 2003,
    createdDate: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000),
    isAnsweredByExpert: true,
    comments: 23,
    user_type: User.ParentingExpert,
    category: Category.Sharing,
    tag: [Tag.NewbornCare],
  };

  const dataCommunity1: HomeCardCommunityProps = {
    name: "Yusi Haryanti",
    profilePictureUrl: "/home_community/yusiH.png",
    title: "Seeking Advice: Parenting Challenges and Insights",
    url: "home/community/1",
    totalUpvote: 18700,
    createdDate: new Date(currentDate.getTime() - 10 * 24 * 60 * 60 * 1000),
    isAnsweredByExpert: true,
    comments: 103,
    user_type: User.CommunityMember,
    category: Category.Ask,
    tag: [
      Tag.BehaviorManag,
      Tag.NutritionAndHealth,
      Tag.MentalHealth,
      Tag.NewbornCare,
    ],
  };

  const dataCommunity2: HomeCardCommunityProps = {
    name: "Dr. H. Pak Vincent",
    profilePictureUrl: "/home_community/pakVincent.png",
    postImageUrl: "/home_community/post/post1.png",
    title: "The Art of Positive and Meaningful Parenting",
    url: "home/community/2",
    totalUpvote: 18500,
    createdDate: new Date(currentDate.getTime() - 20 * 24 * 60 * 60 * 1000),
    isAnsweredByExpert: false,
    comments: 229,
    user_type: User.ParentingExpert,
    category: Category.Sharing,
    tag: [Tag.BehaviorManag, Tag.NewbornCare],
  };

  const dataCommunity3: HomeCardCommunityProps = {
    name: "Ayu Sarina",
    profilePictureUrl: "/home_community/ayuS.png",
    title: "Can a 2 month old child be taken on Hajj?",
    url: "home/community/3",
    totalUpvote: 98700,
    createdDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000),
    isAnsweredByExpert: true,
    comments: 10300000,
    user_type: User.CommunityMember,
    category: Category.Ask,
    tag: [Tag.SafetyAndWB, Tag.NutritionAndHealth],
  };

  const dataCommunity4: HomeCardCommunityProps = {
    name: "Michael Logbonya",
    profilePictureUrl: "/home_community/michaelLog.png",
    postImageUrl: "/home_community/post/post2.png",
    title: "Nurturing Future Leaders: The Essence of Parenting",
    url: "home/community/4",
    totalUpvote: 20700,
    createdDate: new Date(currentDate.getTime() - 49 * 24 * 60 * 60 * 1000),
    isAnsweredByExpert: false,
    comments: 2300,
    user_type: User.InfluentialContributor,
    category: Category.Sharing,
    tag: [Tag.MentalHealth, Tag.NewbornCare],
  };

  const dataCommunity5: HomeCardCommunityProps = {
    name: "Kak Gem",
    profilePictureUrl: "/home_community/KakGem.png",
    postImageUrl: "/home_community/post/post3.png",
    title: "Need Help: Ensuring Child Safety at Home",
    url: "home/community/5",
    totalUpvote: 2100,
    createdDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000),
    isAnsweredByExpert: true,
    comments: 72,
    user_type: User.CommunityMember,
    category: Category.Event,
    tag: [Tag.SafetyAndWB],
  };

  const dataCommunityList: HomeCardCommunityListProps = {
    homeCardsCommunity: [
      dataSearch1,
      dataSearch2,
      dataSearch3,
      dataCommunity1,
      dataCommunity2,
      dataCommunity3,
      dataCommunity4,
      dataCommunity5,
    ],
  };

  return dataCommunityList;
}
