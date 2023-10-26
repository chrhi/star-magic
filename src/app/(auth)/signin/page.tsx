import SigninForm from "@/components/forms/signin-form";
import Image from "next/image";
import { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <div className="w-full h-full flex flex-col max-w-lg p-4 ">
      <div className="h-[50px] md:hidden w-full flex gap-x-2 items-center">
        <Image src="/logo.png" width={50} height={50} alt="My logo" />
        <p className="text-gray-900 font-medium text-3xl ">ProjectFlow</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl my-4 text-start text-gray-950 ">
          Log in to your account
        </h1>
        <p className="text-md text-gray-500">
          Welcome back! please enter your detail
        </p>
      </div>
      <SigninForm />
    </div>
  );
};

export default page;
