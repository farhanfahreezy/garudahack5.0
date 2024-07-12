import React from "react";
import { Category } from "../enum/category";
import Image from "next/image";

interface CategorySelectorProps {
  category: Category;
}

const CategorySelector = ({ category }: CategorySelectorProps) => {
  const getImageSrc = (cat: Category): string => {
    switch (cat) {
      case Category.Ask:
        return "/home_icon/category/ask.svg";
      case Category.Discussion:
        return "/home_icon/category/discussion.svg";
      case Category.Event:
        return "/home_icon/category/event.svg";
      case Category.Review:
        return "/home_icon/category/review.svg";
      default:
        return "/home_icon/category/sharing.svg";
    }
  };
  return (
    <Image
      alt={category}
      src={getImageSrc(category)}
      width={0}
      height={0}
      objectFit="cover"
      className="h-[14px] w-auto"
    />
  );
};

export default CategorySelector;
