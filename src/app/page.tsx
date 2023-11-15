import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Features } from "@/components/layout/Features";
import { Hero } from "@/components/layout/hero";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <Features />
    </MaxWidthWrapper>
  );
}
