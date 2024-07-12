"use client";

import React, { useState } from "react";

import Image from "next/image";
import { getTimePassed } from "../utils/subtractdate";
import {
  BiUpvote,
  BiSolidUpvote,
  BiDownvote,
  BiSolidDownvote,
} from "react-icons/bi";
import { GoShare } from "react-icons/go";
import { truncateNumber } from "../utils/truncateNumber";
import { ResponseAIProps } from "../type/response";

const ResponseAI = ({ content, totalUpvote, createdDate }: ResponseAIProps) => {
  const [upvoteStatus, setUpvoteStatus] = useState("");
  return (
    <div className="flex flex-col gap-2 pt-2">
      {/* USERNAME */}
      <div className="flex flex-col gap-2 pt-2 active:scale-95 transition-all">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-row gap-3 items-center">
            <Image
              alt={"ParentAssist"}
              src={"/icons/parent-assist.svg"}
              width={20}
              height={20}
              className="aspect-square w-[20px] h-[20px] rounded-full"
            />
            <div className="flex flex-col w-full">
              <div className="font-medium text-[15px] flex flex-row gap-2">
                <p>ParentAssist - AI Bot</p>
              </div>
            </div>
          </div>
          <p className="font-medium text-[12px] text-gray-400">
            {getTimePassed(createdDate)}
          </p>
        </div>

        {/* THE POST ITSELF */}

        <p className="text-[13px] font-medium text-gray-500">{content}</p>
      </div>

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
        </div>

        {/* SHARE */}
        <button className="active:scale-95 transition-all">
          <GoShare color={"grey"} size={20} />
        </button>
      </div>
    </div>
  );
};

export default ResponseAI;
