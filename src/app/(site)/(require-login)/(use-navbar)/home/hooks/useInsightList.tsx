"use client";

import { Tag } from "@/app/enum/tag";
import {
  HomeCardInsightListProps,
  HomeCardInsightProps,
} from "@/app/type/homeInsights";
import { useState } from "react";

export default function useInsightList() {
  // const [selectedInsight, setSelectedInsight] = useState({
  //   all: true,
  //   newbornCare: false,
  //   toddlerDev: false,
  //   NutritionAndHealth: false,
  //   EmotionalAndSocialSkills: false,
  //   EducationAndLearning: false,
  //   BehaviorManag: false,
  //   SpecialNeeds: false,
  //   MentalHealth: false,
  //   SafetyAndWB: false,
  //   WorklifeBalance: false,
  // });
  const currentDate = new Date();

  const dataInsight1: HomeCardInsightProps = {
    title:
      "Local Community Initiative Brings Parents Together for Child Development Workshops",
    imageUrl: "/home_insight/insight1.png",
    url: "home/insight/1",
    author: "Jane Ostin",
    createdDate: new Date(currentDate.getTime() - 100 * 24 * 60 * 60 * 1000),
    tags: [Tag.BehaviorManag, Tag.ToddlerDev],
  };

  const dataInsight2: HomeCardInsightProps = {
    title:
      "Study Reveals Positive Impact of Parental Involvement in Early Childhood Education",
    imageUrl: "/home_insight/insight2.png",
    url: "home/insight/2",
    author: "Dani Olmo",
    createdDate: new Date(currentDate.getTime() - 50 * 24 * 60 * 60 * 1000),
    tags: [Tag.ToddlerDev, Tag.EducationAndLearning],
  };

  const dataInsight3: HomeCardInsightProps = {
    title:
      "Tragic Case of Neglect: Parents Charged in Child Endangerment Incident",
    imageUrl: "/home_insight/insight3.png",
    url: "home/insight/3",
    author: "Dani Olmo",
    createdDate: new Date(currentDate.getTime() - 70 * 24 * 60 * 60 * 1000),
    tags: [Tag.EducationAndLearning],
  };

  const dataInsight4: HomeCardInsightProps = {
    title: "Innovative Parenting Apps Gain Popularity Among Modern Families",
    imageUrl: "/home_insight/insight4.png",
    url: "home/insight/4",
    author: "Ian Maatsen",
    createdDate: new Date(currentDate.getTime() - 17 * 24 * 60 * 60 * 1000),
    tags: [Tag.EducationAndLearning],
  };

  const dataInsight5: HomeCardInsightProps = {
    title:
      "Parents Rally for Improved Childcare Policies in Response to Rising Costs",
    imageUrl: "/home_insight/insight5.png",
    url: "home/insight/5",
    author: "Martin Paes",
    createdDate: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000),
    tags: [Tag.NutritionAndHealth, Tag.SafetyAndWB],
  };

  const dataInsightList: HomeCardInsightListProps = {
    homeCardsInsight: [
      dataInsight1,
      dataInsight2,
      dataInsight3,
      dataInsight4,
      dataInsight5,
    ],
  };

  return dataInsightList;
}
