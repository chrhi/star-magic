import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CvCanadaForm from "@/components/forms/cv-canada-form";
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
          Cv <span className="text-violet-600">Canada et Europe </span>
          Collecteur d&apos;informations
        </TypographyH1>
        {/* why we collect these informations  */}
      </div>

      <CvCanadaForm />
    </MaxWidthWrapper>
  );
};

export default page;
