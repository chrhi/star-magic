/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { FC } from "react";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { PasswordInput } from "../password-input";

const SigninForm: FC = ({}) => {
  return (
    <>
      <form className=" flex flex-col items-start w-full gap-y-4">
        <div className="w-full h-fit">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email Address
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1 px-4 h-[50px]"
            placeholder="name@company.com"
          />
          {/* <p className='mt-1 text-sm text-red-600'>{errors.email?.message}</p> */}
        </div>
        <div className="w-full h-fit">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email Address
          </label>
          <PasswordInput
            type="password"
            name="password"
            id="password"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1 px-4 h-[50px]"
            placeholder="*******"
          />
          {/* <p className='mt-1 text-sm text-red-600'>{errors.email?.message}</p> */}
        </div>

        <Button
          //   isLoading={isLoading}
          type="submit"
          //   className={buttonVariants({ size: 'lg', variant: 'rukia' })}
          size="lg"
          className="w-full"
        >
          Login to your account
        </Button>

        <div className="text-sm font-medium text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-blue-500 hover:underline ml-2"
          >
            sign up.
          </Link>
        </div>
      </form>

      <div className="relative mt-4 w-[95%]  mx-auto">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs ">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        className={cn(
          buttonVariants({ size: "lg", variant: "secondary" }),
          "w-[100%]  mr-auto p-4 mt-4 flex justify-center gap-x-6"
        )}
      >
        <Image
          src="/assets/Google__G__Logo.svg.webp"
          alt="github"
          width={20}
          height={20}
        />
        continue with google
      </Button>
    </>
  );
};

export default SigninForm;
