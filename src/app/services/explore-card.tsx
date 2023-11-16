import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  CheckCircle,
  Circle,
  Diamond,
  MessageCircle,
  Plus,
  Sparkle,
  ThumbsUp,
  Triangle,
} from "lucide-react";
import dynamic from "next/dynamic";

const BORDERS_BY_DIFFICULTY = {
  BEGINNER:
    "dark:hover:border-difficulty-beginner-dark hover:border-difficulty-beginner dark:group-focus:border-difficulty-beginner-dark group-focus:border-difficulty-beginner",
  EASY: "dark:hover:border-difficulty-easy-dark hover:border-difficulty-easy dark:group-focus:border-difficulty-easy-dark group-focus:border-difficulty-easy",
  MEDIUM:
    "dark:hover:border-difficulty-medium-dark hover:border-difficulty-medium dark:group-focus:border-difficulty-medium-dark group-focus:border-difficulty-medium",
  HARD: "dark:hover:border-difficulty-hard-dark hover:border-difficulty-hard dark:group-focus:border-difficulty-hard-dark group-focus:border-difficulty-hard",
  EXTREME:
    "dark:hover:border-difficulty-extreme-dark hover:border-difficulty-extreme dark:group-focus:border-difficulty-extreme-dark group-focus:border-difficulty-extreme",
};

const SHADOWS_BY_DIFFICULTY = {
  BEGINNER:
    "hover:shadow-beginner group-focus:shadow-beginner dark:hover:shadow-beginner-dark dark:group-focus:shadow-beginner-dark",
  EASY: "hover:shadow-easy group-focus:shadow-easy dark:hover:shadow-easy-dark dark:group-focus:shadow-easy-dark",
  MEDIUM:
    "hover:shadow-medium group-focus:shadow-medium dark:hover:shadow-medium-dark dark:group-focus:shadow-medium-dark",
  HARD: "hover:shadow-hard group-focus:shadow-hard dark:hover:shadow-hard-dark dark:group-focus:shadow-hard-dark",
  EXTREME:
    "hover:shadow-extreme group-focus:shadow-extreme dark:hover:shadow-extreme-dark dark:group-focus:shadow-extreme-dark",
};

export function ExploreCard() {
  return (
    <Card
      className={`group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px]
      ${SHADOWS_BY_DIFFICULTY["EXTREME"]}
      ${BORDERS_BY_DIFFICULTY["EXTREME"]}
      `}
    >
      {/* <>
        <Diamond className="group-hover/card:text-difficulty-easy dark:group-hover/card:text-difficulty-easy-dark absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] text-black/10 duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10" />
        <Diamond className="group-hover/card:text-difficulty-easy dark:group-hover/card:text-difficulty-easy-dark absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] text-black/10 duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10" />
      </> */}
      <Triangle className="group-hover/card:text-difficulty-medium dark:group-hover/card:text-difficulty-medium-dark absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] text-black/10 duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10" />
      <Triangle className="group-hover/card:text-difficulty-medium dark:group-hover/card:text-difficulty-medium-dark absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] text-black/10 duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10" />

      <CardHeader className="relative flex flex-col items-start gap-1 py-5">
        <CardTitle className="max-w-[75%] truncate text-2xl duration-300">
          cv / resume creation
        </CardTitle>
      </CardHeader>
      <CardContent className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
        <div className="flex items-center gap-2">
          <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20"></div>
          <div className="text-muted-foreground whitespace-nowrap text-sm"></div>
        </div>
        <CardDescription className="relative h-20 pb-4">
          <div className="pointer-events-none absolute inset-0 h-full w-full shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))] duration-300 group-hover/card:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))] group-focus:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))]" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          possimus minima iste ducimus laborum! Aliquam, dignissimos blanditiis,
          asperiores alias fugit, aliquid assumenda delectus reprehenderit eius
          dolor at vel consequuntur repellendus?
        </CardDescription>
      </CardContent>
    </Card>
  );
}
