import HeroCarousel from "@/components/HeroCarousel";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HeroAbdullahProps {}

const Hero: FC = ({}) => {
  return (
    <section className=" relative   py-20 mt-8">
      <div className="flex  max-xl:flex-col gap-10 ">
        <div className="flex w-[50%]  flex-col justify-center">
          <h1 className="text-7xl font-bold text-start">
            Start your online store tody with
            <span className="text-primary"> Owner</span>
          </h1>

          <p className="mt-6 text-2xl text-gray-600  text-start ">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
          <Link
            href="/aignup"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full p-4 max-w-xs h-14 my-5 "
            )}
          >
            {" "}
            start free triel <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          {/* <Searchbar /> */}
        </div>

        <div className="relative w-[50%]  h-[500px]  bg-blue-500  sm:mx-auto">
          <Image
            src="/assets/start.svg"
            alt="arrow"
            width={105}
            height={105}
            className="max-xl:hidden absolute left-[10%] bottom-[80px] z-0"
          />
          <Image
            src="/assets/start.svg"
            alt="arrow"
            width={105}
            height={105}
            className="max-xl:hidden absolute right-[15%] top-[100px] z-0"
          />
          <Image
            src={"/assets/hero-1.png"}
            alt={"woman with laptob"}
            width={984}
            height={1600}
            className="object-contain"
          />

          <Image
            src="/assets/hand-drawn-arrow.svg"
            alt="arrow"
            width={175}
            height={175}
            className="max-xl:hidden absolute -left-[15%] bottom-[100px] z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
