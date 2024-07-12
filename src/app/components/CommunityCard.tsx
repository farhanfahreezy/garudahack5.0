"use client";

import React, { useEffect, useState } from "react";
import { HomeCardCommunityProps } from "../type/homeCommunity";
import Image from "next/image";
import { getTimePassed } from "../utils/subtractdate";
import Link from "next/link";
import TagSelector from "./TagSelector";
import CategorySelector from "./CategorySelector";
import {
  BiUpvote,
  BiSolidUpvote,
  BiDownvote,
  BiSolidDownvote,
  BiCommentDetail,
} from "react-icons/bi";
import { GoShare } from "react-icons/go";
import { truncateNumber } from "../utils/truncateNumber";
import { User } from "../enum/user";

const CommunityCard = ({
  name,
  profilePictureUrl,
  postImageUrl,
  title,
  content,
  url,
  totalUpvote,
  createdDate,
  isAnsweredByExpert,
  comments,
  user_type,
  category,
  tag,
}: HomeCardCommunityProps) => {
  const [upvoteStatus, setUpvoteStatus] = useState("");
  return (
    <div className="flex flex-col gap-2 pt-2">
      {/* USERNAME */}
      <Link
        href={url}
        className="flex flex-col gap-2 pt-2 active:scale-95 transition-all"
      >
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-row gap-3 items-center">
            <Image
              alt={name}
              src={profilePictureUrl}
              width={40}
              height={40}
              className="aspect-square w-[40px] h-[40px] rounded-full"
            />
            <div className="flex flex-col w-full">
              <div className="font-medium text-[16px] flex flex-row gap-2">
                <p>{name}</p>
                {user_type !== User.CommunityMember && (
                  <Image
                    alt="Badge"
                    width={20}
                    height={20}
                    src={
                      user_type === User.ParentingExpert
                        ? "/icons/badge-expert.svg"
                        : "/icons/badge-influencer.svg"
                    }
                  />
                )}
              </div>
              <p className="font-medium text-[10px] text-gray-400">
                {user_type}
              </p>
            </div>
          </div>
          <p className="font-medium text-[12px] text-gray-400">
            {getTimePassed(createdDate)}
          </p>
        </div>

        {/* THE POST ITSELF */}

        {/* TITLE */}
        <h1 className="font-medium text-[16px]">{title}</h1>

        {/* PHOTO, IF ANY */}
        {postImageUrl && (
          <Image
            alt={title}
            src={postImageUrl}
            layout="responsive"
            width={800}
            height={450}
            objectFit="cover"
            className="w-full h-auto rounded-xl"
          />
        )}

        {/* CONTENT, IF ANY */}
        {content && (
          <p className="text-[13px] font-medium text-gray-500">{content}</p>
        )}

        {/* CATEGORY AND TAGS */}
        <div className="flex flex-row gap-2">
          <CategorySelector category={category} />
          {tag.slice(0, 2).map((tagval, index) => (
            <TagSelector key={index} tag={tagval} />
          ))}
          {tag.length > 2 && (
            <div className="text-[10px] bg-pink px-2 rounded-lg">
              +{tag.length - 2}
            </div>
          )}
        </div>

        {/* APPROVED BY MADDOG */}
        {isAnsweredByExpert && (
          <div className="flex flex-row gap-2">
            <Image
              alt={name}
              src={"/expert/sinaga.png"}
              width={16}
              height={16}
              objectFit="cover"
              className="w-[16px] aspect-square rounded-xl"
            />
            <p className="text-[10px] font-medium text-gray-400">
              Response from Certified Expert
            </p>
          </div>
        )}
      </Link>

      {/* UPVOTE DOWNLOVE ETC */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center gap-4">
          {/* UPVOTE */}
          <div className="flex flex-row justify-center items-center gap-2 bg-gray-100 p-2 rounded-xl">
            <button
              onClick={() => {
                if (upvoteStatus == "up") {
                  setUpvoteStatus("");
                } else {
                  setUpvoteStatus("up");
                }
              }}
            >
              {upvoteStatus == "up" ? (
                <BiSolidUpvote color={"green"} />
              ) : (
                <BiUpvote color={"grey"} />
              )}
            </button>
            <p className="text-[13px] font-medium text-gray-600">
              {truncateNumber(totalUpvote)}
            </p>
            <button
              onClick={() => {
                if (upvoteStatus == "down") {
                  setUpvoteStatus("");
                } else {
                  setUpvoteStatus("down");
                }
              }}
            >
              {upvoteStatus == "down" ? (
                <BiSolidDownvote color={"red"} />
              ) : (
                <BiDownvote color={"grey"} />
              )}
            </button>
          </div>

          {/* COMMENT */}
          <Link href={url}>
            <button className="flex flex-row gap-1 items-center justify-center active:scale-95 transition-all">
              <BiCommentDetail size={18} color="grey" />
              <p className="text-gray-600 font-medium text-[13px]">
                {truncateNumber(comments)}
              </p>
            </button>
          </Link>
        </div>

        {/* SHARE */}
        <button className="active:scale-95 transition-all">
          <GoShare color={"grey"} size={20} />
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
