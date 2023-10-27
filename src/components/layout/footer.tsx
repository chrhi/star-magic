import { FC } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

interface footerAbdullahProps {}

const Footer: FC = ({}) => {
  return (
    <div className="w-full h-[500px] bg-blue-500">
      <MaxWidthWrapper className="flex w-full h-full flex-col">
        <div className="w-full h-[400px] gird grid-cols-6  "></div>
        <div className="border-t flex items-center justify-start  border-white w-full mt-auto h-[100px]">
          <p className="text-white text-xl font-medium">
            {" "}
            © 2023 owner.com all rights resolved
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
