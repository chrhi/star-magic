"use client";
import DogeSmile from "@/assets/images/doge.webp";
import Image from "next/image";
import React, { type FC } from "react";
import { InlineWidget } from "react-calendly";
import Balancer from "react-wrap-balancer";

const BookCall: FC = ({}) => {
  return (
    <div className="w-[400px] my-8 mx-auto">
      <div className="mt-1 flex flex-col my-4 gap-3 px-4 text-center sm:px-0">
        <a
          className="mx-auto hidden rounded-full bg-gradient-to-r from-[#31bdc6] to-[#3178c6] p-[1px] brightness-90 contrast-150 focus:outline-none focus:ring-blue-600 focus-visible:ring-2 dark:brightness-125 dark:contrast-100 sm:block"
          href="#features"
        >
          <div className="group relative overflow-hidden rounded-full bg-white/80 px-3 py-1 duration-300 hover:pr-9 dark:bg-black/80">
            <span className="bg-gradient-to-r from-[#31bdc6] to-[#3178c6] bg-clip-text text-transparent">
              <svg
                className="mr-1 inline-block h-4 w-4 fill-[#31bdc6]"
                viewBox="4 4 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m19.2 36.4-4.75-10.45L4 21.2l10.45-4.75L19.2 6l4.75 10.45L34.4 21.2l-10.45 4.75ZM36.4 42l-2.35-5.25-5.25-2.35 5.25-2.4 2.35-5.2 2.4 5.2 5.2 2.4-5.2 2.35Z" />
              </svg>
              book a call, wow{" "}
              <Image
                className="absolute -bottom-1 right-1 translate-y-7 duration-300 group-hover:translate-y-0"
                alt="doge smile"
                height="28"
                width="28"
                src={DogeSmile}
              />
            </span>
          </div>
        </a>
        <h1 className="text-4xl font-bold">
          <Balancer>Have A General Inquiry?</Balancer>
        </h1>
        <p className="text-black/50 dark:text-white/50">
          <Balancer>
            If you have a general inquiry and would like to speak to our expert
            team
          </Balancer>
        </p>
      </div>
      <InlineWidget url="https://calendly.com/abdellah-chehri/30min" />
    </div>
  );
};

export default BookCall;
