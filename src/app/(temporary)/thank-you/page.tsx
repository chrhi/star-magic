import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TypographyH1 } from "@/components/typography/h1";
import { TypographyH2 } from "@/components/typography/h2";
import { TypographyH3 } from "@/components/typography/h3";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div
        className="w-full my-4 h-[500px] flex flex-col gap-y-8 items-center justify-center
      "
      >
        <TypographyH1>
          <span className="text-violet-600">That&apos; it </span>
        </TypographyH1>
        <TypographyH1>
          <span className="text-violet-600">Thank you</span> For putting your
          trust on us
        </TypographyH1>
        <TypographyH2>Inchallah we will be at your expectations</TypographyH2>
        <TypographyH3>
          nous vous contacterons via votre email et vous pourrez envisager de
          nous suivre sur notre page{" "}
          <Link href="https://www.facebook.com/profile.php?id=61553400310615">
            <Button variant="link">Facebook</Button>
          </Link>
        </TypographyH3>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
