import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TypographyH1 } from "@/components/typography/h1";
import type { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div
        className="w-full my-4 h-[50px] flex items-center justify-center
      "
      >
        <TypographyH1>
          Cv <span className="text-violet-600">Canada</span> Information
          Collectore
        </TypographyH1>
        {/* why we collect these informations  */}
      </div>

      {/* form that has everything we need */}
    </MaxWidthWrapper>
  );
};

export default page;
