"use client";

import CommunityCard from "@/app/components/CommunityCard";
import ResponseAI from "@/app/components/ResponseAI";
import { Category } from "@/app/enum/category";
import { Tag } from "@/app/enum/tag";
import { User } from "@/app/enum/user";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const session = useSession();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast.success("ParentAssist Responded");
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full">
      {/* TOP */}
      <div className="w-full flex flex-col px-4 pt-4 gap-4">
        {/* Navigasi dan submit */}
        <div className="flex flex-row justify-between items-center">
          <Link href={"/home"}>
            <IoChevronBackCircleOutline color="#45197D" size={32} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col h-full w-full overflow-y-scroll bg-white p-4 divide-y-[1px] space-y-2">
        <CommunityCard
          name={session.data?.user.name}
          profilePictureUrl={"/expert/aubrey.jpg"}
          title={"Seeking Advice: Parenting Challenges and Insights"}
          content="As a parent navigating the journey of raising children, I often wonder: How do experienced parents handle sibling rivalry effectively? What are some strategies to encourage healthy eating habits in toddlers? Your wisdom and shared experiences would greatly help me in fostering a nurturing environment for my family. #ParentingAdvice #WisdomOfExperience"
          url="/post"
          totalUpvote={0}
          createdDate={new Date()}
          isAnsweredByExpert={false}
          comments={0}
          user_type={User.CommunityMember}
          category={Category.Ask}
          tag={[Tag.BehaviorManag, Tag.NutritionAndHealth]}
        />

        {/* AI RESPONSE */}
        {isLoading ? (
          <div className="w-full">
            <Skeleton width={"180px"} height={"22px"} />
            <Skeleton count={5} />
          </div>
        ) : (
          <ResponseAI
            totalUpvote={0}
            createdDate={new Date()}
            content="Handling sibling rivalry effectively involves setting clear boundaries, encouraging cooperative play, and ensuring each child feels heard and valued. For encouraging healthy eating habits in toddlers, involve them in meal prep, offer a variety of healthy foods, and model good eating behavior yourself. Consistency and patience are key. #ParentingAdvice #SiblingRivalry #HealthyEatingHabits"
          />
        )}
      </div>
    </div>
  );
}
