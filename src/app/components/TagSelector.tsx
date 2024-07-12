import React from "react";
import { Tag } from "../enum/tag";
import Image from "next/image";

interface TagSelectorProps {
  tag: Tag;
}

const TagSelector = ({ tag }: TagSelectorProps) => {
  const getImageSrc = (tag: Tag): string => {
    switch (tag) {
      case Tag.NewbornCare:
        return "/home_icon/tag/newborn.svg";
      case Tag.ToddlerDev:
        return "/home_icon/tag/toddler.svg";
      case Tag.NutritionAndHealth:
        return "/home_icon/tag/nutrition.svg";
      case Tag.EmotionalAndSocialSkills:
        return "/home_icon/tag/emotional.svg";
      case Tag.EducationAndLearning:
        return "/home_icon/tag/education.svg";
      case Tag.BehaviorManag:
        return "/home_icon/tag/behavior.svg";
      case Tag.SpecialNeeds:
        return "/home_icon/tag/special.svg";
      case Tag.MentalHealth:
        return "/home_icon/tag/mental.svg";
      case Tag.SafetyAndWB:
        return "/home_icon/tag/safety.svg";
      case Tag.WorklifeBalance:
        return "/home_icon/tag/worklife.svg";
      default:
        return "/home_icon/tag/education.svg";
    }
  };
  return (
    <Image
      alt={tag}
      src={getImageSrc(tag)}
      width={0}
      height={0}
      objectFit="cover"
      className="h-[14px] w-auto"
    />
  );
};

export default TagSelector;
