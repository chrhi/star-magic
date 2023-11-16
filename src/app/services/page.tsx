import { Suspense } from "react";

import { ExploreSection } from "./explore-section";
import { ExploreSectionSkeleton } from "./explore-section-skeleton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// CI fails without this
export const dynamic = "force-dynamic";

export default async function Explore() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-8">
        <div className="container">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Our Services
          </h1>
          <p className=" max-w-[69ch] text-lg leading-10 text-neutral-600 dark:text-white/50">
            Explore the challenges. Embrace the opportunity to grow, learn, and
            showcase your programming abilities. We hope you find the{" "}
            <span className="font-semibold dark:text-neutral-200">perfect</span>{" "}
            challenge!
          </p>
        </div>
        <Suspense fallback={<ExploreSectionSkeleton />}>
          <ExploreSection />
        </Suspense>
      </div>
    </MaxWidthWrapper>
  );
}
