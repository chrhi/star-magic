import { Balancer } from "react-wrap-balancer";
import clsx from "clsx";
import Image from "next/image";
import DogeSmile from "@/assets/images/doge.webp";
import FeatureCardChallengeDark1 from "@/assets/images/feature_card_challenge_dark1.png";
import FeatureCardChallengeDark2 from "@/assets/images/feature_card_challenge_dark2.png";
import FeatureCardChallengeLight1 from "@/assets/images/feature_card_challenge_light1.png";
import FeatureCardChallengeLight2 from "@/assets/images/feature_card_challenge_light2.png";

import { ImageCard } from "./feature-card";

export function Features() {
  return (
    <section className="relative overflow-hidden" id="features">
      <div className="mx-auto mb-[64px] grid max-w-[1400px] items-center justify-center px-4 sm:px-24 md:px-4 lg:px-24">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="mt-1 flex flex-col gap-3 px-4 text-center sm:px-0">
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
                  our services, wow{" "}
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
              <Balancer>What&apos;s in Star Magic?</Balancer>
            </h1>
            <p className="text-black/50 dark:text-white/50">
              <Balancer>All you need in one place</Balancer>
            </p>
          </div>
          <div className="relative z-10 grid w-full gap-4 md:grid-cols-2 lg:gap-8 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block">
            <ImageCard
              imgClass1={clsx(
                "pointer-events-none transition-transform duration-500 bg-neutral-50/30 dark:bg-neutral-800/30",
                "scale-[150%] sm:scale-100 md:scale-100 max-md:rounded-sm rounded-xl top-[69%] left-[69px] md:top-auto w-[42%] sm:top-[50%] md:-bottom-[1%] xl:-bottom-[11%] sm:left-[40px] md:w-[69%]",
                "md:group-hover:translate-x-2 md:group-hover:scale-95"
              )}
              imgClass2={clsx(
                "pointer-events-none transition-transform duration-500 bg-neutral-50/50 dark:bg-zinc-800/60 backdrop-blur-sm translate-x-0",
                "scale-[190%] sm:scale-[120%] md:scale-100 rounded-2xl max-md:rounded-md left-[50%] sm:top-[49%] top-[69%] md:top-auto w-[50%] sm:left-[39%] md:-bottom-[2%] xl:-bottom-[12%] md:w-[77%]",
                "md:group-hover:scale-105 md:group-hover:-translate-x-2"
              )}
              description="Engage in TypeScript challenges to strengthen your grasp of the type system and advanced features"
              bgClass="md:bg-gradient-to-br"
              image={{
                dark1: FeatureCardChallengeDark2,
                dark2: FeatureCardChallengeDark1,
                light1: FeatureCardChallengeLight2,
                light2: FeatureCardChallengeLight1,
                alt: "Something",
              }}
              title="Type Challenges"
            />
            <ImageCard
              imgClass1={clsx(
                "pointer-events-none transition-transform duration-500 bg-neutral-50/30 dark:bg-neutral-800/30",
                "scale-[150%] sm:scale-100 md:scale-100 max-md:rounded-sm rounded-xl top-[69%] left-[69px] md:top-auto w-[42%] sm:top-[50%] md:-bottom-[1%] xl:-bottom-[11%] sm:left-[40px] md:w-[69%]",
                "md:group-hover:translate-x-2 md:group-hover:scale-95"
              )}
              imgClass2={clsx(
                "pointer-events-none transition-transform duration-500 bg-neutral-50/50 dark:bg-zinc-800/60 backdrop-blur-sm translate-x-0",
                "scale-[190%] sm:scale-[120%] md:scale-100 rounded-2xl max-md:rounded-md left-[50%] sm:top-[49%] top-[69%] md:top-auto w-[50%] sm:left-[39%] md:-bottom-[2%] xl:-bottom-[12%] md:w-[77%]",
                "md:group-hover:scale-105 md:group-hover:-translate-x-2"
              )}
              description="Engage in TypeScript challenges to strengthen your grasp of the type system and advanced features"
              bgClass="md:bg-gradient-to-br"
              image={{
                dark1: FeatureCardChallengeDark2,
                dark2: FeatureCardChallengeDark1,
                light1: FeatureCardChallengeLight2,
                light2: FeatureCardChallengeLight1,
                alt: "Something",
              }}
              title="Type Challenges"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
