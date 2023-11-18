import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BookCall from "@/components/book-call";
import { Features } from "@/components/layout/Features";
import { Hero } from "@/components/layout/hero";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <Features />
      {/* <BookCall /> */}
    </MaxWidthWrapper>
  );
}
