import CommunityCard from "@/app/components/CommunityCard";
import ResponseAI from "@/app/components/ResponseAI";
import ResponseCommunity from "@/app/components/ResponseCommunity";
import { Category } from "@/app/enum/category";
import { Tag } from "@/app/enum/tag";
import { User } from "@/app/enum/user";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const currentDate = new Date();
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
          name={"Homelander"}
          profilePictureUrl={"/expert/homelander.jpg"}
          title={
            "Request for Guidance: Overcoming Parenting Challenges and Gaining Valuable Insights"
          }
          content="As a parent navigating the journey of raising children, I often wonder: How do experienced parents handle sibling rivalry effectively? What are some strategies to encourage healthy eating habits in toddlers? Your wisdom and shared experiences would greatly help me in fostering a nurturing environment for my family. #ParentingAdvice #WisdomOfExperience"
          url="/home/1"
          totalUpvote={21303}
          createdDate={
            new Date(currentDate.getTime() - 10 * 24 * 60 * 60 * 1000)
          }
          isAnsweredByExpert={true}
          comments={3212}
          user_type={User.CommunityMember}
          category={Category.Ask}
          tag={[Tag.BehaviorManag, Tag.NutritionAndHealth]}
        />

        <ResponseAI
          totalUpvote={213}
          createdDate={
            new Date(currentDate.getTime() - 10 * 24 * 60 * 60 * 1000)
          }
          content="Handling sibling rivalry effectively involves setting clear boundaries, encouraging cooperative play, and ensuring each child feels heard and valued. For encouraging healthy eating habits in toddlers, involve them in meal prep, offer a variety of healthy foods, and model good eating behavior yourself. Consistency and patience are key. #ParentingAdvice #SiblingRivalry #HealthyEatingHabits"
        />

        <div className="pt-10">
          <button className="text-[13px] py-1 px-3 bg-darkPurple1 rounded-lg w-fit text-white text-center active:scale-95 transition-all">
            + Add Comment
          </button>
        </div>

        <ResponseCommunity
          name={"Dr. Ferdinant Sinaga"}
          profilePictureUrl={"/expert/sinaga.png"}
          content={
            "Sibling rivalry can be managed by fostering individual connections with each child, teaching conflict resolution skills, and promoting empathy. For healthy eating habits, offer nutritious choices, establish mealtime routines, and involve children in food preparation to instill a positive relationship with food."
          }
          totalUpvote={2102}
          createdDate={
            new Date(currentDate.getTime() - 8 * 24 * 60 * 60 * 1000)
          }
          comments={100}
          user_type={User.ParentingExpert}
        />

        <ResponseCommunity
          name={"Seraga Berasa"}
          profilePictureUrl={"/expert/sydney.jpg"}
          content={
            "Set clear rules, encourage sharing, and make sure each child feels important. For healthy eating, involve toddlers in cooking and offer various healthy foods. Patience is key"
          }
          totalUpvote={12}
          createdDate={
            new Date(currentDate.getTime() - 9 * 24 * 60 * 60 * 1000)
          }
          comments={2}
          user_type={User.CommunityMember}
        />
      </div>
    </div>
  );
}
